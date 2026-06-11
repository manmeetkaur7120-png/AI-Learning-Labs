import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API_URL from '../config';
import './NeuralNetworkLab.css';

function NeuralNetworkLab() {
  const navigate = useNavigate();
  const [networkId] = useState('lab-network-' + Date.now());
  const [config, setConfig] = useState({
    inputSize: 2,
    hiddenSize: 4,
    outputSize: 1,
    learningRate: 0.1,
    epochs: 20
  });
  const [isTraining, setIsTraining] = useState(false);
  const [trainingHistory, setTrainingHistory] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const handleConfigChange = (key, value) => {
    setConfig({
      ...config,
      [key]: parseFloat(value) || value
    });
  };

  const createNetwork = async () => {
    try {
      setError(null);
      const response = await fetch(`${API_URL}/neural-network/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: networkId,
          ...config
        })
      });

      if (!response.ok) throw new Error('Failed to create network');
      const data = await response.json();
      setStatus('Network created successfully!');
      console.log('Network created:', data);
    } catch (err) {
      setError(err.message);
    }
  };

  const trainNetwork = async () => {
    try {
      setError(null);
      setIsTraining(true);

      // Generate sample training data (XOR problem)
      const trainingData = [
        { input: [0, 0], output: [0] },
        { input: [0, 1], output: [1] },
        { input: [1, 0], output: [1] },
        { input: [1, 1], output: [0] }
      ];

      const response = await fetch(`${API_URL}/neural-network/train`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: networkId,
          trainingData,
          epochs: config.epochs
        })
      });

      if (!response.ok) throw new Error('Failed to train network');
      
      // Get training status
      const statusResponse = await fetch(`${API_URL}/neural-network/status/${networkId}`);
      const statusData = await statusResponse.json();
      
      setTrainingHistory(statusData.trainingHistory);
      setStatus(`Training complete! Final loss: ${statusData.lastLoss.toFixed(4)}`);
      setIsTraining(false);
    } catch (err) {
      setError(err.message);
      setIsTraining(false);
    }
  };

  const getNetworkStatus = async () => {
    try {
      setError(null);
      const response = await fetch(`${API_URL}/neural-network/status/${networkId}`);
      
      if (!response.ok) throw new Error('Network not found');
      
      const data = await response.json();
      setTrainingHistory(data.trainingHistory);
      setStatus(`Epochs completed: ${data.epochs}, Last loss: ${data.lastLoss ? data.lastLoss.toFixed(4) : 'N/A'}`);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="nn-lab-container">
      <div className="nn-header">
        <h1>🧠 Neural Network Lab</h1>
        <p>Interactive experimentation with neural networks</p>
        <button className="btn-back" onClick={() => navigate('/topics')}>
          ← Back to Topics
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}
      {status && <div className="success-message">{status}</div>}

      <div className="nn-content">
        {/* Configuration Panel */}
        <div className="config-panel">
          <h2>Network Configuration</h2>
          
          <div className="config-group">
            <label>Input Size</label>
            <input
              type="number"
              min="1"
              max="10"
              value={config.inputSize}
              onChange={(e) => handleConfigChange('inputSize', e.target.value)}
              disabled={isTraining}
            />
            <small>Number of input features</small>
          </div>

          <div className="config-group">
            <label>Hidden Layer Size</label>
            <input
              type="number"
              min="2"
              max="32"
              value={config.hiddenSize}
              onChange={(e) => handleConfigChange('hiddenSize', e.target.value)}
              disabled={isTraining}
            />
            <small>Number of neurons in hidden layer</small>
          </div>

          <div className="config-group">
            <label>Output Size</label>
            <input
              type="number"
              min="1"
              max="10"
              value={config.outputSize}
              onChange={(e) => handleConfigChange('outputSize', e.target.value)}
              disabled={isTraining}
            />
            <small>Number of output neurons</small>
          </div>

          <div className="config-group">
            <label>Learning Rate</label>
            <input
              type="number"
              min="0.01"
              max="1"
              step="0.01"
              value={config.learningRate}
              onChange={(e) => handleConfigChange('learningRate', e.target.value)}
              disabled={isTraining}
            />
            <small>How fast the network learns (0.01 - 1)</small>
          </div>

          <div className="config-group">
            <label>Epochs</label>
            <input
              type="number"
              min="5"
              max="100"
              value={config.epochs}
              onChange={(e) => handleConfigChange('epochs', e.target.value)}
              disabled={isTraining}
            />
            <small>Number of training iterations</small>
          </div>

          <button 
            className="btn btn-primary" 
            onClick={createNetwork}
            disabled={isTraining}
          >
            Create Network
          </button>
        </div>

        {/* Training Panel */}
        <div className="training-panel">
          <h2>Training</h2>
          
          <div className="training-info">
            <p><strong>Network ID:</strong> {networkId.slice(0, 20)}...</p>
            <p><strong>Status:</strong> {isTraining ? '🔄 Training...' : '✓ Ready'}</p>
          </div>

          <div className="training-buttons">
            <button 
              className="btn btn-success" 
              onClick={trainNetwork}
              disabled={isTraining}
            >
              {isTraining ? 'Training...' : 'Start Training'}
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={getNetworkStatus}
              disabled={isTraining}
            >
              Check Status
            </button>
          </div>

          {/* Training History */}
          {trainingHistory.length > 0 && (
            <div className="training-history">
              <h3>Training History</h3>
              <div className="history-chart">
                <svg width="100%" height="200" viewBox="0 0 300 200">
                  {trainingHistory.map((entry, i) => {
                    const maxLoss = Math.max(...trainingHistory.map(h => h.loss));
                    const x = (i / trainingHistory.length) * 300;
                    const y = 200 - (entry.loss / maxLoss) * 180;
                    const nextEntry = trainingHistory[i + 1];
                    const nextY = nextEntry ? 200 - (nextEntry.loss / maxLoss) * 180 : y;
                    const nextX = ((i + 1) / trainingHistory.length) * 300;

                    return (
                      <g key={i}>
                        {i < trainingHistory.length - 1 && (
                          <line x1={x} y1={y} x2={nextX} y2={nextY} stroke="#4CAF50" strokeWidth="2" />
                        )}
                        <circle cx={x} cy={y} r="2" fill="#4CAF50" />
                      </g>
                    );
                  })}
                  {/* Axes */}
                  <line x1="0" y1="200" x2="300" y2="200" stroke="#ccc" strokeWidth="1" />
                  <line x1="0" y1="20" x2="0" y2="200" stroke="#ccc" strokeWidth="1" />
                </svg>
              </div>
              
              <div className="history-table">
                <h4>Loss by Epoch</h4>
                <div className="table-scroll">
                  {trainingHistory.map((entry, i) => (
                    <div key={i} className="history-row">
                      <span className="epoch">Epoch {entry.epoch}</span>
                      <span className="loss">{entry.loss.toFixed(4)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Information Panel */}
        <div className="info-panel">
          <h2>How It Works</h2>
          <div className="info-content">
            <h3>Neural Network Basics</h3>
            <ul>
              <li><strong>Input Layer:</strong> Receives input data</li>
              <li><strong>Hidden Layer:</strong> Processes information</li>
              <li><strong>Output Layer:</strong> Produces predictions</li>
            </ul>

            <h3>Training Process</h3>
            <ol>
              <li>Forward Pass: Data flows through network</li>
              <li>Calculate Loss: Compare output with target</li>
              <li>Backward Pass: Update weights to reduce loss</li>
              <li>Repeat: Continue for specified epochs</li>
            </ol>

            <h3>Parameters</h3>
            <dl>
              <dt>Learning Rate:</dt>
              <dd>Controls how much weights change per update. Higher = faster learning, lower = more stable</dd>
              
              <dt>Hidden Size:</dt>
              <dd>More neurons = more capacity to learn complex patterns, but slower training</dd>
              
              <dt>Epochs:</dt>
              <dd>Number of times network sees the training data. More = better learning, but risk of overfitting</dd>
            </dl>

            <h3>Example: XOR Problem</h3>
            <p>This lab trains the network to solve the XOR (exclusive OR) problem:</p>
            <ul>
              <li>0 XOR 0 = 0</li>
              <li>0 XOR 1 = 1</li>
              <li>1 XOR 0 = 1</li>
              <li>1 XOR 1 = 0</li>
            </ul>
            <p>This requires a hidden layer because XOR is not linearly separable!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NeuralNetworkLab;