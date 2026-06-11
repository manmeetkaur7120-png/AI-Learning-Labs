const express = require('express');
const router = express.Router();

// Simple neural network simulator
class NeuralNetwork {
  constructor(inputSize, hiddenSize, outputSize, learningRate = 0.01) {
    this.inputSize = inputSize;
    this.hiddenSize = hiddenSize;
    this.outputSize = outputSize;
    this.learningRate = learningRate;
    
    // Initialize weights randomly
    this.initializeWeights();
  }

  initializeWeights() {
    this.weights1 = this.randomMatrix(this.inputSize, this.hiddenSize);
    this.bias1 = this.randomMatrix(1, this.hiddenSize);
    this.weights2 = this.randomMatrix(this.hiddenSize, this.outputSize);
    this.bias2 = this.randomMatrix(1, this.outputSize);
  }

  randomMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
      matrix[i] = [];
      for (let j = 0; j < cols; j++) {
        matrix[i][j] = Math.random() * 0.5 - 0.25;
      }
    }
    return matrix;
  }

  sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
  }

  sigmoidDerivative(x) {
    return x * (1 - x);
  }

  forward(input) {
    // Hidden layer
    this.z1 = this.matmul(input, this.weights1);
    this.z1 = this.addBias(this.z1, this.bias1);
    this.a1 = this.applyActivation(this.z1, this.sigmoid);

    // Output layer
    this.z2 = this.matmul(this.a1, this.weights2);
    this.z2 = this.addBias(this.z2, this.bias2);
    this.a2 = this.applyActivation(this.z2, this.sigmoid);

    return this.a2;
  }

  backward(input, output, target) {
    // Output layer error
    const m = input.length;
    const dz2 = this.subtract(this.a2, target);
    const dw2 = this.scale(this.matmul(this.transpose(this.a1), dz2), 1 / m);
    const db2 = this.scale(this.sum(dz2), 1 / m);

    // Hidden layer error
    const da1 = this.matmul(dz2, this.transpose(this.weights2));
    const dz1 = this.elementwiseMultiply(da1, this.applyActivation(this.a1, this.sigmoidDerivative));
    const dw1 = this.scale(this.matmul(this.transpose(input), dz1), 1 / m);
    const db1 = this.scale(this.sum(dz1), 1 / m);

    // Update weights
    this.weights1 = this.subtract(this.weights1, this.scale(dw1, this.learningRate));
    this.bias1 = this.subtract(this.bias1, this.scale(db1, this.learningRate));
    this.weights2 = this.subtract(this.weights2, this.scale(dw2, this.learningRate));
    this.bias2 = this.subtract(this.bias2, this.scale(db2, this.learningRate));
  }

  calculateLoss(output, target) {
    const m = output.length;
    let loss = 0;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < output[i].length; j++) {
        const val = output[i][j];
        loss -= target[i][j] * Math.log(val + 1e-8) + (1 - target[i][j]) * Math.log(1 - val + 1e-8);
      }
    }
    return loss / m;
  }

  // Matrix operations
  matmul(a, b) {
    const result = [];
    for (let i = 0; i < a.length; i++) {
      result[i] = [];
      for (let j = 0; j < b[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < b.length; k++) {
          sum += a[i][k] * b[k][j];
        }
        result[i][j] = sum;
      }
    }
    return result;
  }

  transpose(matrix) {
    const result = [];
    for (let j = 0; j < matrix[0].length; j++) {
      result[j] = [];
      for (let i = 0; i < matrix.length; i++) {
        result[j][i] = matrix[i][j];
      }
    }
    return result;
  }

  addBias(matrix, bias) {
    return matrix.map((row, i) => row.map((val, j) => val + bias[0][j]));
  }

  applyActivation(matrix, fn) {
    return matrix.map(row => row.map(fn));
  }

  subtract(a, b) {
    return a.map((row, i) => row.map((val, j) => val - b[i][j]));
  }

  scale(matrix, scalar) {
    return matrix.map(row => row.map(val => val * scalar));
  }

  elementwiseMultiply(a, b) {
    return a.map((row, i) => row.map((val, j) => val * b[i][j]));
  }

  sum(matrix) {
    const result = [];
    for (let j = 0; j < matrix[0].length; j++) {
      let sum = 0;
      for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][j];
      }
      result[0] = result[0] || [];
      result[0][j] = sum;
    }
    return result;
  }
}

// Store active networks
const networks = {};

// GET network info
router.get('/info', (req, res) => {
  try {
    res.json({
      message: 'Neural Network Lab API',
      endpoints: [
        'POST /api/neural-network/create - Create new network',
        'POST /api/neural-network/train - Train network',
        'GET /api/neural-network/status/:id - Get network status'
      ]
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to get info' });
  }
});

// POST create network
router.post('/create', (req, res) => {
  try {
    const { id, inputSize, hiddenSize, outputSize, learningRate } = req.body;
    
    if (!id) {
      return res.status(400).json({ error: 'Network ID required' });
    }

    const network = new NeuralNetwork(
      inputSize || 4,
      hiddenSize || 8,
      outputSize || 1,
      learningRate || 0.1
    );

    networks[id] = {
      network,
      config: { inputSize, hiddenSize, outputSize, learningRate },
      history: []
    };

    console.log('Network created:', id);

    res.json({
      success: true,
      id,
      config: networks[id].config
    });
  } catch (error) {
    console.error('Error creating network:', error);
    res.status(500).json({ error: 'Failed to create network' });
  }
});

// POST train network
router.post('/train', (req, res) => {
  try {
    const { id, trainingData, epochs } = req.body;

    if (!id || !networks[id]) {
      return res.status(404).json({ error: 'Network not found' });
    }

    const { network, history } = networks[id];
    let totalLoss = 0;

    for (let epoch = 0; epoch < (epochs || 10); epoch++) {
      let epochLoss = 0;

      trainingData.forEach(({ input, output }) => {
        const prediction = network.forward([input]);
        const loss = network.calculateLoss(prediction, [output]);
        epochLoss += loss;
        network.backward([input], prediction, [output]);
      });

      epochLoss /= trainingData.length;
      totalLoss = epochLoss;
      history.push({
        epoch: epoch + 1,
        loss: epochLoss
      });
    }

    console.log('Network trained:', id, 'Final loss:', totalLoss);

    res.json({
      success: true,
      id,
      finalLoss: totalLoss,
      historyLength: history.length
    });
  } catch (error) {
    console.error('Error training network:', error);
    res.status(500).json({ error: 'Failed to train network' });
  }
});

// POST predict
router.post('/predict', (req, res) => {
  try {
    const { id, input } = req.body;

    if (!id || !networks[id]) {
      return res.status(404).json({ error: 'Network not found' });
    }

    const network = networks[id].network;
    const prediction = network.forward([input]);

    res.json({
      success: true,
      input,
      prediction: prediction[0]
    });
  } catch (error) {
    console.error('Error predicting:', error);
    res.status(500).json({ error: 'Failed to make prediction' });
  }
});

// GET network status
router.get('/status/:id', (req, res) => {
  try {
    const { id } = req.params;

    if (!networks[id]) {
      return res.status(404).json({ error: 'Network not found' });
    }

    const { config, history } = networks[id];

    res.json({
      success: true,
      id,
      config,
      trainingHistory: history,
      epochs: history.length,
      lastLoss: history.length > 0 ? history[history.length - 1].loss : null
    });
  } catch (error) {
    console.error('Error getting status:', error);
    res.status(500).json({ error: 'Failed to get status' });
  }
});

module.exports = router;