// Complete list of 40 AI/ML topics with summaries
const expandedTopics = [
  // FUNDAMENTALS (Topics 1-10)
  {
    id: 1,
    title: "Introduction to Machine Learning",
    category: "Fundamentals",
    difficulty: "Beginner",
    description: "Learn the basics of machine learning and how it differs from traditional programming.",
    summary: "Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. Unlike traditional programming where developers write explicit instructions, machine learning systems learn patterns from data. There are three main types: supervised learning (learning from labeled data), unsupervised learning (finding patterns in unlabeled data), and reinforcement learning (learning through interaction with environment). Key concepts include training data, features, labels, models, and evaluation metrics. Machine learning has revolutionized industries like healthcare, finance, and technology by enabling automated decision-making and prediction. Understanding these fundamentals is essential before diving into specialized ML techniques and applications.",
    overview: "Comprehensive introduction to machine learning concepts, types, and real-world applications."
  },
  {
    id: 2,
    title: "Supervised Learning Fundamentals",
    category: "Fundamentals",
    difficulty: "Beginner",
    description: "Master supervised learning with labeled training data.",
    summary: "Supervised learning is a machine learning approach where the training data includes both input features and their corresponding correct outputs (labels). The algorithm learns to map inputs to outputs by finding patterns in the labeled examples. Common supervised learning algorithms include linear regression (for continuous outputs), logistic regression (for binary classification), decision trees, random forests, and support vector machines. The key advantage is that you have ground truth labels to validate performance. Challenges include the need for large amounts of labeled data, which can be expensive to obtain. Supervised learning is widely used for prediction tasks like house price estimation, email spam detection, disease diagnosis, and customer churn prediction. Proper train-test splitting and cross-validation are essential practices.",
    overview: "Deep dive into supervised learning algorithms and their practical applications."
  },
  {
    id: 3,
    title: "Unsupervised Learning & Clustering",
    category: "Fundamentals",
    difficulty: "Beginner",
    description: "Discover patterns in unlabeled data using clustering techniques.",
    summary: "Unsupervised learning works with data that doesn't have labeled outputs, aiming to discover hidden patterns and structures. Clustering is a major unsupervised learning technique that groups similar data points together. Popular clustering algorithms include K-means, hierarchical clustering, DBSCAN, and Gaussian Mixture Models. K-means partitions data into K clusters by minimizing within-cluster variance. Hierarchical clustering creates dendrograms showing nested groupings. DBSCAN finds density-based clusters of arbitrary shapes. Applications include customer segmentation, document organization, gene sequence analysis, and image compression. Challenges include determining the optimal number of clusters and handling high-dimensional data. Dimensionality reduction techniques like PCA help visualize and reduce noise in unsupervised learning. Evaluation metrics differ from supervised learning since there are no true labels.",
    overview: "Learn how to find hidden patterns and group similar data."
  },
  {
    id: 4,
    title: "Reinforcement Learning Basics",
    category: "Fundamentals",
    difficulty: "Intermediate",
    description: "Learn how agents learn through interaction and rewards.",
    summary: "Reinforcement learning teaches agents to make sequential decisions by interacting with an environment and receiving rewards or penalties. Unlike supervised learning with labeled data, RL learns through trial-and-error. Key concepts include states (current situation), actions (possible moves), rewards (feedback signals), and policies (decision rules). The Markov Decision Process (MDP) is the mathematical framework. Q-learning and policy gradient methods are popular algorithms. Applications include game playing (AlphaGo), robotics, autonomous vehicles, and recommendation systems. Exploration-exploitation trade-off is crucial: exploring new actions vs exploiting known good actions. Reward shaping influences learning behavior. Deep reinforcement learning combines RL with neural networks for handling complex environments with high-dimensional inputs. RL has achieved superhuman performance in games like Chess and Go.",
    overview: "Understand how machines learn through rewards and penalties."
  },
  {
    id: 5,
    title: "Data Preprocessing & Feature Engineering",
    category: "Fundamentals",
    difficulty: "Beginner",
    description: "Prepare and transform data for machine learning models.",
    summary: "Data preprocessing is crucial for ML success: garbage in, garbage out. It includes handling missing values (deletion, imputation, or prediction), removing duplicates, and standardizing formats. Feature engineering creates meaningful features from raw data to improve model performance. Techniques include scaling (normalization, standardization), encoding categorical variables (one-hot encoding, label encoding), and creating new features from existing ones. Outlier detection and removal prevents skewed models. Data imbalancing (too many of one class) requires techniques like oversampling or undersampling. Feature selection reduces dimensionality by removing irrelevant features, improving model efficiency. Domain knowledge is invaluable in feature engineering. Tools like pandas and scikit-learn automate many preprocessing tasks. Proper preprocessing can significantly impact final model performance, sometimes more than algorithm choice.",
    overview: "Essential techniques for cleaning and transforming data."
  },
  {
    id: 6,
    title: "Model Evaluation & Validation",
    category: "Fundamentals",
    difficulty: "Intermediate",
    description: "Measure and evaluate machine learning model performance.",
    summary: "Proper model evaluation prevents overfitting and ensures real-world performance. Train-test splitting divides data (typically 80-20) so test data remains unseen during training. Cross-validation (k-fold) uses multiple train-test splits for robust evaluation. Classification metrics include accuracy (overall correctness), precision (false positive rate), recall (false negative rate), F1-score (harmonic mean), and ROC-AUC. Regression metrics include MAE (mean absolute error), RMSE (root mean squared error), and R-squared (coefficient of determination). Confusion matrices visualize classification performance. Learning curves show how performance changes with more data. Hyperparameter tuning (grid search, random search) optimizes model settings. Regularization (L1, L2) prevents overfitting. Early stopping halts training when validation performance plateaus. A/B testing compares models in production. Avoiding data leakage ensures fair evaluation.",
    overview: "Master techniques to measure and improve model performance."
  },
  {
    id: 7,
    title: "Linear Regression & Regularization",
    category: "Fundamentals",
    difficulty: "Intermediate",
    description: "Predict continuous values using linear regression.",
    summary: "Linear regression models relationships between input features and continuous outputs using a linear function. Simple linear regression uses one feature; multiple linear regression uses many features. The goal is minimizing prediction error (loss function). Ordinary Least Squares (OLS) finds the best-fit line by minimizing sum of squared errors. Assumptions include linearity, independence, homoscedasticity, and normality of residuals. Multicollinearity (correlated features) causes unstable estimates. Regularization addresses this: Ridge regression (L2) shrinks coefficients, Lasso (L1) eliminates features, Elastic Net combines both. Polynomial regression handles non-linear relationships by adding polynomial features. Interpretation is straightforward: coefficients show feature importance and direction. Applications include price prediction, sales forecasting, and trend analysis. Limitations include inability to model complex non-linear patterns directly.",
    overview: "Master linear regression for predicting continuous values."
  },
  {
    id: 8,
    title: "Logistic Regression & Classification",
    category: "Fundamentals",
    difficulty: "Intermediate",
    description: "Binary and multiclass classification using logistic regression.",
    summary: "Logistic regression predicts binary outcomes (yes/no, true/false) using the sigmoid function that outputs probabilities between 0 and 1. Despite its name, it's a classification algorithm, not regression. The decision boundary separates classes at probability 0.5. Log loss (cross-entropy) is the loss function, measuring divergence from true probabilities. Binary logistic regression extends to multiclass via one-vs-rest or softmax (multinomial) approaches. Coefficients indicate feature importance and direction of effect. The odds ratio shows how odds change with feature increases. Assumptions are fewer than linear regression but include linear decision boundaries. Regularization prevents overfitting. Applications include disease diagnosis, email spam detection, credit approval, and churn prediction. Advantages include interpretability, speed, and probabilistic outputs.",
    overview: "Learn classification with logistic regression and probability."
  },
  {
    id: 9,
    title: "Decision Trees & Ensemble Methods",
    category: "Machine Learning Algorithms",
    difficulty: "Intermediate",
    description: "Non-linear classification and regression using tree-based methods.",
    summary: "Decision trees recursively split data based on feature values, creating a tree-like model for classification or regression. Splits maximize information gain (information theory) or minimize impurity (Gini/entropy). Advantages include interpretability and handling of non-linear relationships. Disadvantages include tendency to overfit, especially with deep trees. Pruning reduces overfitting by removing branches. Random Forests build many decision trees on random data subsets, averaging predictions for robustness. Gradient Boosting sequentially builds trees, each correcting previous errors. XGBoost and LightGBM are optimized implementations with excellent performance. Feature importance ranks which features matter most. Tree depth controls model complexity via hyperparameters. Ensemble methods combine multiple models: bagging (parallel), boosting (sequential), stacking (meta-model).",
    overview: "Master tree-based and ensemble methods for powerful predictions."
  },
  {
    id: 10,
    title: "Support Vector Machines (SVM)",
    category: "Machine Learning Algorithms",
    difficulty: "Intermediate",
    description: "Powerful classification using support vector machines.",
    summary: "Support Vector Machines find optimal hyperplanes that maximize margin (distance to nearest points) between classes. SVMs work in high-dimensional spaces and handle non-linear boundaries via kernel tricks. Common kernels: linear (fast), polynomial (curved boundaries), RBF (flexible, versatile), sigmoid (similar to neural networks). The C parameter controls regularization: high C may overfit, low C underfits. Gamma controls RBF kernel influence: high gamma focuses on near points, low gamma considers distant points. SVMs excel with binary classification; multiclass requires one-vs-rest or one-vs-one strategies. Advantages include theoretical guarantees, effectiveness in high dimensions, and memory efficiency. Disadvantages include computational cost for large datasets and difficulty interpreting decisions. Applications include text classification, handwriting recognition, and bioinformatics.",
    overview: "Master powerful SVM algorithms for classification tasks."
  },

  // DEEP LEARNING (Topics 11-20)
  {
    id: 11,
    title: "Neural Networks Basics",
    category: "Deep Learning",
    difficulty: "Intermediate",
    description: "Understand the fundamental architecture of neural networks.",
    summary: "Neural networks are computational models inspired by biological neurons, consisting of interconnected nodes (neurons) organized in layers. Each neuron performs a weighted sum of inputs plus bias, followed by an activation function. The network has three main types of layers: input (receives data), hidden (processes information), and output (produces predictions). Weights and biases are learned through training. Forward pass computes outputs; backward pass (backpropagation) updates weights using gradient descent. Activation functions (ReLU, sigmoid, tanh) introduce non-linearity enabling learning of complex patterns. Deeper networks (more hidden layers) can learn hierarchical representations. Challenges include vanishing/exploding gradients, choosing architecture, and computational cost. Applications span image recognition, natural language processing, and game playing. Universal approximation theorem shows neural networks can learn any function. Understanding basics is crucial before diving into specialized architectures like CNNs and RNNs.",
    overview: "Foundation concepts for understanding deep learning."
  },
  {
    id: 12,
    title: "Convolutional Neural Networks (CNN)",
    category: "Deep Learning",
    difficulty: "Intermediate",
    description: "Specialized neural networks for image and spatial data processing.",
    summary: "Convolutional Neural Networks are designed for processing grid-like data, particularly images. Convolution operations apply learned filters (kernels) across the image, detecting features like edges, textures, and patterns. Pooling layers downsample feature maps, reducing dimensionality while preserving important information. Stride and padding control convolution behavior. Stacking multiple convolutional layers creates hierarchical feature extraction: early layers find simple features (edges), deeper layers combine them into complex patterns (shapes, objects). Dropout and batch normalization prevent overfitting. Popular architectures include LeNet, AlexNet, VGG, ResNet, and Inception. CNNs have revolutionized computer vision tasks: image classification, object detection, semantic segmentation, and facial recognition. Transfer learning allows using pre-trained CNNs on new tasks. CNNs are computationally intensive but highly effective. Understanding CNNs is essential for modern computer vision applications.",
    overview: "Master CNNs for image processing and computer vision."
  },
  {
    id: 13,
    title: "Recurrent Neural Networks (RNN)",
    category: "Deep Learning",
    difficulty: "Intermediate",
    description: "Specialized networks for sequential and time-series data.",
    summary: "Recurrent Neural Networks process sequential data (text, audio, time series) by maintaining hidden state across time steps. At each step, RNNs take input and previous hidden state, producing output and new hidden state. This allows learning long-term dependencies. However, basic RNNs suffer from vanishing gradient problem making it hard to learn long-range dependencies. Long Short-Term Memory (LSTM) networks address this via memory cells and gates (input, forget, output) controlling information flow. Gated Recurrent Units (GRU) simplify LSTMs with fewer parameters. Bidirectional RNNs process sequences forward and backward. Applications include machine translation, speech recognition, sentiment analysis, and time series forecasting. Encoder-decoder architectures combine RNNs for sequence-to-sequence tasks. Attention mechanisms allow focusing on relevant parts of input. Transformers, using self-attention exclusively, have largely replaced RNNs for many NLP tasks due to better parallelization and long-range modeling.",
    overview: "Learn RNNs for sequential and temporal data."
  },
  {
    id: 14,
    title: "Transformers & Attention Mechanisms",
    category: "Deep Learning",
    difficulty: "Advanced",
    description: "State-of-the-art architecture revolutionizing NLP.",
    summary: "Transformers use self-attention mechanisms instead of recurrence, enabling parallel processing of sequences and better long-range dependency modeling. Multi-head attention allows focusing on different aspects simultaneously. Positional encoding preserves sequence order. Encoder-decoder architecture: encoder processes input, decoder generates output step-by-step. Transformer-based models (BERT, GPT, T5) achieve state-of-the-art results on NLP benchmarks. BERT uses bidirectional encoding; GPT uses causal (unidirectional) decoding. Transfer learning via pre-training on large text corpora followed by fine-tuning on specific tasks is highly effective. Applications include machine translation, question-answering, text generation, summarization, and sentiment analysis. Vision Transformers (ViT) adapt transformers for image tasks, treating images as sequences of patches. Transformers require large datasets and computational resources but deliver superior performance. Understanding transformers is critical for modern NLP and increasingly for computer vision.",
    overview: "Master transformers for state-of-the-art NLP tasks."
  },
  {
    id: 15,
    title: "Generative Adversarial Networks (GAN)",
    category: "Deep Learning",
    difficulty: "Advanced",
    description: "Create synthetic data using competing neural networks.",
    summary: "Generative Adversarial Networks consist of two networks: generator (creates fake data) and discriminator (distinguishes real from fake), competing in a two-player game. Generator aims to fool discriminator; discriminator aims to correctly classify. This adversarial training improves both networks. Generator learns to create increasingly realistic data. Discriminator becomes better at detecting fakes. Nash equilibrium is reached when generator produces perfect fakes and discriminator achieves 50% accuracy (random chance). Training GANs is notoriously unstable; techniques like Wasserstein distance, spectral normalization, and progressive growing improve stability. Conditional GANs (cGAN) guide generation with class labels. Applications include: image generation, style transfer, super-resolution, data augmentation, and anomaly detection. StyleGAN produces photorealistic faces. CycleGAN enables unpaired image-to-image translation. GANs have limitations: mode collapse (generating limited diversity), training instability, and computational cost.",
    overview: "Learn to create synthetic data with GANs."
  },
  {
    id: 16,
    title: "Autoencoders & Representation Learning",
    category: "Deep Learning",
    difficulty: "Intermediate",
    description: "Learn efficient data representations through unsupervised learning.",
    summary: "Autoencoders are unsupervised neural networks that learn compact data representations (encodings) by reconstructing input from a compressed intermediate layer. Encoder compresses input into latent space; decoder reconstructs output from latent representation. Bottleneck layer forces learning of efficient representations. Loss function measures reconstruction error (MSE or binary crossentropy). Variational Autoencoders (VAE) add probabilistic interpretation: encoder outputs distribution parameters, decoder samples from distribution. VAEs enable interpolation and generation of new data. Applications include: dimensionality reduction, denoising, anomaly detection, and generative modeling. Sparse autoencoders induce sparsity constraints. Stacked autoencoders enable representation learning at multiple levels. Autoencoders excel at capturing data structure when labels are unavailable. Limitations include difficulty learning complex data distributions compared to GANs and relatively simple learned features.",
    overview: "Master unsupervised representation learning."
  },
  {
    id: 17,
    title: "Transfer Learning & Fine-tuning",
    category: "Deep Learning",
    difficulty: "Intermediate",
    description: "Leverage pre-trained models for new tasks efficiently.",
    summary: "Transfer learning reuses knowledge from models trained on large datasets for new tasks, dramatically reducing training time and data requirements. Pre-trained models like ImageNet-trained CNNs contain learned features transferable across tasks. Fine-tuning strategies: freeze early layers (learn general features), update later layers (task-specific features), or update all layers (complete adaptation). Domain adaptation addresses distribution mismatch between source and target domains. Feature extraction treats pre-trained model as fixed feature generator, training only final classification layers. Meta-learning enables rapid adaptation to new tasks with few examples. Applications: medical imaging with limited data, domain adaptation, few-shot learning. Transfer learning enabled deep learning adoption in resource-constrained domains. Foundation models (large pre-trained models like BERT, GPT) enable transfer learning across diverse applications. Challenges include negative transfer (pre-trained knowledge hurts performance) and domain shift.",
    overview: "Efficiently adapt pre-trained models to new tasks."
  },
  {
    id: 18,
    title: "Optimization & Gradient Descent",
    category: "Deep Learning",
    difficulty: "Intermediate",
    description: "Understand optimization algorithms for training neural networks.",
    summary: "Optimization in deep learning minimizes loss functions by updating model parameters. Gradient descent computes gradients (direction of steepest descent) and updates parameters: new_param = old_param - learning_rate * gradient. Batch gradient descent uses entire dataset; stochastic gradient descent (SGD) uses single samples; mini-batch uses small batches (balanced approach). Learning rate controls step size: too high causes divergence, too low causes slow convergence. Momentum accumulates gradients, enabling faster convergence and escaping shallow local minima. Nesterov momentum looks ahead before updating. Adaptive learning rate methods: Adagrad (larger steps for sparse features), RMSprop (divides by exponential moving average of squared gradients), Adam (combines momentum and RMSprop, most popular). Learning rate schedules decay learning rate during training. Batch normalization stabilizes training. Weight initialization significantly impacts convergence. Second-order methods (Newton, Quasi-Newton) compute Hessian but are computationally expensive.",
    overview: "Master optimization techniques for training deep networks."
  },
  {
    id: 19,
    title: "Regularization & Preventing Overfitting",
    category: "Deep Learning",
    difficulty: "Intermediate",
    description: "Techniques to prevent neural networks from memorizing data.",
    summary: "Overfitting occurs when models learn training data details including noise, failing to generalize. Regularization techniques prevent this. L1 (lasso) and L2 (ridge) penalize large weights, encouraging simpler models. Dropout randomly deactivates neurons during training, preventing co-adaptation and ensemble effects. Batch normalization normalizes layer inputs, acting as regularization. Early stopping halts training when validation loss increases. Data augmentation creates variations (rotations, flips, crops for images) increasing training data diversity. Weight decay (L2 regularization) is standard practice. Ensemble methods (bagging, boosting) combine multiple models reducing overfitting. Mixup blends training examples. Cutout/Cutmix randomly removes/mixes regions. Adversarial training adds adversarial examples. Cross-validation assesses generalization. Large models trained on sufficient data require strong regularization. Balancing bias-variance trade-off is art: too much regularization underfits (high bias), too little overfits (high variance).",
    overview: "Learn techniques to improve model generalization."
  },
  {
    id: 20,
    title: "Advanced CNN Architectures",
    category: "Deep Learning",
    difficulty: "Advanced",
    description: "Modern CNN architectures pushing computer vision boundaries.",
    summary: "Advanced CNN architectures build on convolutional foundations with innovations enabling better performance. ResNet introduced residual connections (skip connections) enabling training of very deep networks (100+ layers) by allowing gradient flow bypassing layers. Bottleneck architecture uses 1x1 convolutions reducing parameters. Inception/GoogLeNet uses multi-scale convolutions in parallel. DenseNet connects all layers densely, enabling feature reuse and parameter efficiency. Squeeze-and-Excitation modules learn channel importance weights. MobileNet uses depthwise separable convolutions for efficiency on mobile devices. EfficientNet uses compound scaling balancing depth, width, and resolution. YOLOv3/v4 achieve real-time object detection. Mask R-CNN extends Faster R-CNN with instance segmentation. U-Net enables semantic segmentation with skip connections. Vision Transformers (ViT) challenge CNNs dominance. Architecture design is crucial: same dataset accuracy varies with architecture choice. AutoML searches for optimal architectures automatically. Domain-specific architectures exist for medical imaging, video, and 3D data.",
    overview: "Explore cutting-edge CNN architectures."
  },

  // NLP (Topics 21-25)
  {
    id: 21,
    title: "Natural Language Processing Basics",
    category: "Natural Language Processing",
    difficulty: "Beginner",
    description: "Fundamentals of processing and understanding text.",
    summary: "Natural Language Processing enables computers to understand and generate human language. Key tasks include tokenization (splitting text into words), part-of-speech tagging (identifying grammar roles), named entity recognition (identifying people, places), and parsing (syntactic structure). Preprocessing steps: lowercasing, removing punctuation, stemming (reducing words to root), lemmatization (dictionary forms). Bag-of-words represents text as word frequency vectors, discarding order. TF-IDF measures word importance. N-grams capture word sequences. Stop word removal eliminates common words. Word sense disambiguation resolves ambiguity. Challenges include context dependency, ambiguity, and language variation. NLP applications: sentiment analysis, machine translation, question-answering, chatbots, information extraction, summarization. Language models predict next word probabilities. Evaluation metrics: BLEU (machine translation), ROUGE (summarization), F1 (named entity recognition). Modern NLP uses deep learning especially transformers. Cultural and linguistic diversity presents ongoing challenges.",
    overview: "Essential concepts for NLP tasks."
  },
  {
    id: 22,
    title: "Word Embeddings & Word2Vec",
    category: "Natural Language Processing",
    difficulty: "Intermediate",
    description: "Represent words as dense vectors capturing semantic meaning.",
    summary: "Word embeddings convert discrete words to continuous vectors capturing semantic and syntactic relationships. Word2Vec creates embeddings via two approaches: Skip-gram (predict context from word) or CBOW (predict word from context). Training uses negative sampling or hierarchical softmax for efficiency. Similar words have similar embeddings; relationships like king-man+woman equals queen emerge. GloVe (Global Vectors) uses matrix factorization combining local and global statistics. FastText handles out-of-vocabulary words via character n-grams. Embedding dimensions typically 50-300; higher dimensions capture more information. Pre-trained embeddings leverage knowledge from massive text corpora. Applications: similarity measurement, clustering, visualization (t-SNE). Limitations: context-independent (homonyms have one embedding), no sentence context awareness. Contextual embeddings (ELMo, BERT) address these by computing embeddings based on surrounding context. Bias in embeddings reflects training data biases; debiasing is important.",
    overview: "Master semantic word representations."
  },
  {
    id: 23,
    title: "Sentiment Analysis & Text Classification",
    category: "Natural Language Processing",
    difficulty: "Intermediate",
    description: "Analyze emotions and classify text automatically.",
    summary: "Sentiment analysis determines emotional tone (positive, negative, neutral) of text. Applications: social media monitoring, customer feedback, movie reviews, stock market analysis. Approaches: lexicon-based (dictionary of sentiment words), machine learning (train classifier on labeled examples), deep learning (RNNs, transformers). Lexicon-based is interpretable but limited. ML requires labeled data; performance depends on data quality and quantity. Deep learning excels but needs more data and computational resources. Pre-processing crucial: handling negations (not bad), intensifiers (very), sarcasm (challenging). Multi-class (emotions: joy, anger, sadness) vs binary classification. Aspect-based sentiment targets specific aspects (food vs service in restaurant reviews). Imbalanced datasets (many neutrals, few negatives) require special handling. Evaluation metrics: accuracy, precision, recall, F1, confusion matrix. Domain adaptation: models trained on reviews may fail on social media. Emerging challenges: sarcasm, code-switching, out-of-domain data.",
    overview: "Determine text sentiment and emotions."
  },
  {
    id: 24,
    title: "Machine Translation & Sequence-to-Sequence",
    category: "Natural Language Processing",
    difficulty: "Advanced",
    description: "Automatic translation between languages using deep learning.",
    summary: "Machine translation converts text from one language to another automatically. Sequence-to-sequence (seq2seq) models with encoder-decoder architecture process variable-length sequences. Encoder processes source language, generating context vector. Decoder generates target language from context. Attention mechanisms allow decoder to focus on relevant source words. Transformer-based models (Multilingual BERT, mBART) outperform RNNs. Challenges: rare words, long sentences (context loss), morphological richness, ambiguity, domain adaptation. Back-translation generates synthetic parallel data. Multilingual models share representations across languages. Evaluation: BLEU score measures n-gram overlap (limitations: ignores synonyms, doesn't correlate with human judgment well). METEOR, chrF include semantic matching. Human evaluation remains important. Statistical machine translation (phrase-based, syntax-based) precedes neural approaches. Low-resource languages lack training data; zero-shot translation uses high-resource language pairs. Real-time translation poses computational constraints.",
    overview: "Enable automatic translation across languages."
  },
  {
    id: 25,
    title: "Question-Answering & Information Retrieval",
    category: "Natural Language Processing",
    difficulty: "Advanced",
    description: "Build systems that answer questions from text.",
    summary: "Question-answering systems retrieve answers to user queries from documents or knowledge bases. Extractive QA identifies answer spans in source documents. Generative QA generates answers from scratch. Dense passage retrieval uses embeddings for relevant document retrieval. Reading comprehension requires understanding context and questions (SQuAD benchmark). Knowledge graphs structure facts enabling logical reasoning. Open-domain QA searches entire internet; closed-domain searches specific documents. Multi-hop reasoning requires chaining multiple facts. Coreference resolution links pronouns to entities. Entity linking maps names to knowledge base entries. Information retrieval ranks documents by relevance: tf-idf, BM25, neural dense retrieval. Large language models (GPT) enable zero-shot QA without fine-tuning. Challenges: ambiguity, reasoning, multi-hop inference, out-of-domain queries. Evaluation: exact match (EM), F1 (token overlap), ROUGE, BLEU. Applications: FAQ systems, chatbots, search engines, virtual assistants.",
    overview: "Build question-answering systems."
  },

  // COMPUTER VISION (Topics 26-30)
  {
    id: 26,
    title: "Image Processing Fundamentals",
    category: "Computer Vision",
    difficulty: "Beginner",
    description: "Basic techniques for image manipulation and analysis.",
    summary: "Image processing modifies images enhancing quality or extracting information. Images are 2D matrices of pixel values (grayscale: 0-255, color: RGB channels). Filtering applies kernels (small matrices) to images via convolution: smoothing (blur), edge detection (Sobel, Canny), sharpening. Morphological operations (erosion, dilation) modify shapes. Histogram equalization enhances contrast. Color space conversions (RGB to HSV, grayscale) suit different applications. Image pyramids create multi-scale representations. Affine transforms (rotation, translation, scaling) modify image geometry. Perspective transforms handle 3D views. Thresholding segments images into foreground/background. Connected components find object regions. Blob detection identifies circular regions. Template matching finds known patterns. Optical flow estimates motion between frames. Applications: medical imaging, satellite imagery, document processing, robotics. OpenCV is standard library. GPU acceleration enables real-time processing. Deep learning now dominates; handcrafted features less common.",
    overview: "Master fundamental image processing techniques."
  },
  {
    id: 27,
    title: "Object Detection & Localization",
    category: "Computer Vision",
    difficulty: "Intermediate",
    description: "Locate and identify objects within images.",
    summary: "Object detection identifies object locations (bounding boxes) and classes in images. YOLO (You Only Look Once) treats detection as regression: predicts bounding boxes and class probabilities directly. Single-stage detectors (YOLO, SSD) are fast; two-stage detectors (Faster R-CNN) are accurate. R-CNN variants: Fast R-CNN uses region proposals and ROI pooling, Faster R-CNN adds RPN (region proposal network), Mask R-CNN extends with instance segmentation. Non-maximum suppression removes duplicate overlapping detections. Anchor boxes of different scales/aspect ratios capture object diversity. Focal loss addresses class imbalance. Feature pyramid networks handle multi-scale objects. Hard negative mining focuses training on difficult examples. Challenges: varying scales, occlusion, real-time requirements, small objects. Evaluation: average precision (AP), mAP (mean AP across classes). COCO benchmark has 80 classes; evaluation includes multiple IoU thresholds. Adversarial robustness: imperceptible perturbations fool detectors. Applications: autonomous driving, surveillance, robotics, medical imaging.",
    overview: "Detect and locate objects in images."
  },
  {
    id: 28,
    title: "Semantic Segmentation & Instance Segmentation",
    category: "Computer Vision",
    difficulty: "Intermediate",
    description: "Pixel-level classification for detailed scene understanding.",
    summary: "Semantic segmentation classifies each pixel into predefined categories (road, building, tree). Fully convolutional networks (FCN) enable end-to-end pixel classification. U-Net uses encoder-decoder with skip connections, effective for medical imaging. DeepLab uses dilated (atrous) convolutions capturing multi-scale context. Conditional random fields (CRF) post-process segmentations enforcing spatial consistency. Instance segmentation distinguishes individual objects: Mask R-CNN extends Faster R-CNN with segmentation branch. Panoptic segmentation unifies semantic (stuff like sky) and instance (things like cars). Weakly supervised learning uses image-level labels, scribbles, or bounding boxes instead of full segmentation. Semi-supervised learning leverages unlabeled data. Domain adaptation addresses distribution shift between domains. Challenges: class imbalance, boundaries, occlusion, real-time speed. Loss functions: cross-entropy, dice loss, focal loss. Evaluation: mIoU (mean Intersection over Union), IoU per class. Applications: autonomous driving, medical imaging, scene understanding, robotics.",
    overview: "Achieve detailed pixel-level image understanding."
  },
  {
    id: 29,
    title: "Pose Estimation & Keypoint Detection",
    category: "Computer Vision",
    difficulty: "Intermediate",
    description: "Detect human poses and body keypoints.",
    summary: "Pose estimation locates body keypoints (joints) to infer pose. Single-person pose estimation localizes keypoints for one person (simpler). Multi-person pose estimation handles multiple people and keypoint associations (top-down: detect people first, estimate poses; bottom-up: detect keypoints first, associate into poses). OpenPose pioneered multi-person with part affinity fields. Convolutional pose machines use sequential predictions. Deep high-resolution networks maintain fine-grained spatial information. Keypoint matching links detected points into consistent skeletons. Challenges: occlusion, crowding, scale variation, fast motion. 3D pose estimation infers 3D coordinates from 2D images (single-view: inherently ambiguous; multi-view: triangulation). Temporal modeling (video) adds consistency and reduces errors. Applications: action recognition, motion capture, fitness tracking, healthcare (fall detection, gait analysis), gaming, VR. Datasets: COCO Keypoints (17 keypoints), MPII (16 keypoints). Evaluation: Object Keypoint Similarity (OKS), similar to IoU for keypoints.",
    overview: "Detect human body poses and movements."
  },
  {
    id: 30,
    title: "3D Vision & Depth Estimation",
    category: "Computer Vision",
    difficulty: "Advanced",
    description: "Understand 3D scenes from images and depth.",
    summary: "3D vision reconstructs 3D world from images. Depth estimation predicts per-pixel depth (monocular single-image to depth; stereo uses two images). Stereo matching finds corresponding pixels in stereo images using epipolar geometry. Structure from motion reconstructs 3D from video sequences. Simultaneous localization and mapping (SLAM) builds 3D maps while tracking camera pose. Depth from defocus uses focus cues; time-of-flight measures light travel time; structured light projects patterns. Monocular depth networks (MDE) train on labeled data or self-supervision. Self-supervised depth uses photometric loss (warped image matches target). Occlusion handling critical in reconstruction. Bundle adjustment jointly optimizes 3D points and camera poses. Point clouds are sparse 3D representations (expensive). Volumetric representations (voxels, implicit functions) suit learning. Mesh reconstruction surfaces point clouds. 3D object detection extends 2D detection to 3D (harder with fewer cues). Challenges: ambiguity (2D-to-3D not one-to-one), scale ambiguity (monocular). Applications: autonomous driving, robotics, virtual reality, reconstruction.",
    overview: "Reconstruct and understand 3D scenes."
  },

  // SPECIALIZED TOPICS (Topics 31-40)
  {
    id: 31,
    title: "Anomaly Detection",
    category: "Specialized Applications",
    difficulty: "Intermediate",
    description: "Identify unusual patterns and outliers.",
    summary: "Anomaly detection identifies rare, abnormal data points deviating from normal patterns. Outlier detection (univariate: single variable statistics, multivariate: multiple variables) uses thresholds. Isolation forests recursively partition space isolating anomalies. Local outlier factor (LOF) measures local density. One-class SVM defines decision boundary around normal data. Autoencoders reconstruct normal data well, poorly reconstruct anomalies (high reconstruction error). Isolation-based methods efficient for high dimensions. Statistical methods (Gaussian, Mahalanobis) assume distributions. Challenges: imbalanced data (few anomalies), concept drift (anomalies change), false positives/negatives. Unsupervised: cluster compactly, outliers sparse. Semi-supervised: learn from labeled normal data. Supervised: unbalanced classification. Evaluation: precision, recall, ROC-AUC (often no true labels). Applications: fraud detection (credit cards, insurance), intrusion detection (cybersecurity), medical (disease diagnosis), manufacturing (quality control), server monitoring (performance anomalies).",
    overview: "Detect unusual and abnormal patterns."
  },
  {
    id: 32,
    title: "Time Series Forecasting",
    category: "Specialized Applications",
    difficulty: "Intermediate",
    description: "Predict future values from temporal sequences.",
    summary: "Time series forecasting predicts future values based on historical patterns. ARIMA (AutoRegressive Integrated Moving Average) combines autoregression (past values), differencing (stationarity), and moving averages. Exponential smoothing weights recent observations more heavily. Prophet decomposes series into trend, seasonality, and holidays (excellent for business data). LSTM and GRU networks learn temporal dependencies automatically. Temporal convolutional networks (TCN) use dilated convolutions capturing long-range dependencies. Transformer-based models attend to relevant past timesteps. Encoder-decoder with attention handles variable-length inputs. Challenges: stationarity (convert to stationary), missing values (interpolation), multiple seasonalities (daily, weekly, yearly), distribution shifts. Univariate: single variable; multivariate: multiple variables with dependencies. Autoregressive: predict using past values. Exogenous: incorporate external features (weather, economic indicators). Evaluation: MAE, RMSE, MAPE (percentage error). Walk-forward validation respects temporal order. Applications: stock prices, weather, traffic, sales, demand forecasting.",
    overview: "Forecast future time series values."
  },
  {
    id: 33,
    title: "Recommendation Systems",
    category: "Specialized Applications",
    difficulty: "Intermediate",
    description: "Personalized recommendations for users.",
    summary: "Recommendation systems suggest items (movies, products, articles) users likely enjoy. Collaborative filtering: user-based (similar users have similar preferences), item-based (similar items liked together), matrix factorization (low-rank decomposition of user-item matrix). Content-based: recommend items similar to user past preferences (requires item features). Hybrid: combines collaborative and content-based. Matrix factorization decomposes user-item interaction matrix into latent factors. Factorization machines handle sparse data and feature interactions efficiently. Deep learning: neural networks learn user/item embeddings. Session-based RNNs predict next item in session. Attention mechanisms focus on relevant past interactions. Cold-start problem: few interactions for new users/items (solved via hybrid approaches, side information). Implicit feedback (clicks, views) vs explicit (ratings). Challenges: sparsity (most pairs unobserved), concept drift (preferences change), serendipity (surprising recommendations). Evaluation: precision, recall, NDCG (ranking quality), coverage (diversity). A/B testing in production. Fairness: balanced recommendations across demographics.",
    overview: "Personalize recommendations for users."
  },
  {
    id: 34,
    title: "Meta-Learning & Few-Shot Learning",
    category: "Specialized Applications",
    difficulty: "Advanced",
    description: "Learn to learn with minimal examples.",
    summary: "Meta-learning enables rapid adaptation to new tasks with few examples. Few-shot learning: k-shot n-way learning predicts from k examples per n classes (e.g., 5-shot 5-way). Model-agnostic meta-learning (MAML) trains model initialization enabling quick fine-tuning. Metric learning (prototypical networks, matching networks, siamese) learns distance metrics; classification via nearest neighbor. Memory-augmented networks store support examples. Transfer learning uses pre-trained knowledge; meta-learning learns how to transfer. Matching networks use attention matching query to support examples. Prototypical networks compute class prototypes (centers). Relational networks learn comparison functions. Optimization-based MAML explicitly optimizes for few-step adaptation. Metric-based approaches generalize better to new classes. Challenges: limited training data per task, task diversity, domain shift. Evaluation: few-shot benchmarks (Omniglot, miniImageNet, tieredImageNet). Applications: low-data domains (medical imaging), rapid prototyping, personalization. Continual learning: tasks arrive sequentially without forgetting old tasks.",
    overview: "Learn efficiently from few examples."
  },
  {
    id: 35,
    title: "Federated Learning & Privacy",
    category: "Specialized Applications",
    difficulty: "Advanced",
    description: "Train models on distributed private data.",
    summary: "Federated learning trains models across decentralized data without centralizing it (privacy-preserving). Devices compute local gradients, send to server which aggregates (FedAvg algorithm). Differential privacy adds noise preventing privacy leakage even with aggregate access. Byzantine-robust aggregation handles malicious participants. Communication efficiency matters: compress gradients, reduce rounds. Heterogeneous data: non-IID (not identical distribution) across devices complicates training. Personalized federated learning adapts to local distributions. Vertical federated learning: different features on different devices. Challenges: communication costs, convergence speed, privacy-utility tradeoff. Differential privacy guarantees epsilon-delta privacy: higher epsilon less private. Secure multi-party computation cryptographically combines results. Homomorphic encryption computes on encrypted data. Applications: healthcare (patient data privacy), finance, on-device learning (mobile phones), IoT. Regulations (GDPR, HIPAA) drive adoption. Tradeoff: privacy vs. model utility/personalization.",
    overview: "Train models on private distributed data."
  },
  {
    id: 36,
    title: "Interpretability & Explainability (XAI)",
    category: "Specialized Applications",
    difficulty: "Intermediate",
    description: "Understand why models make decisions.",
    summary: "Explainability makes AI decisions understandable to humans (crucial for healthcare, finance, law). Intrinsic interpretability: models naturally interpretable (linear models, decision trees). Post-hoc explanations explain black-box models. LIME (Local Interpretable Model-agnostic Explanations) approximates model locally with interpretable model. SHAP (SHapley Additive exPlanations) computes feature importance using game theory. Gradient-based: saliency maps show input regions affecting output. Attention weights show relevant context. Feature importance ranks features by impact. Counterfactual explanations: minimal input changes flipping predictions. Influence functions trace predictions to training examples. Adversarial examples reveal model brittleness. Challenges: explanations may be misleading, multiple explanations possible, computational cost. Fairness: detect biased predictions, ensure equitable treatment. Model distillation: compress complex model into simpler interpretable one. Regulations (GDPR) require explainability. Applications: healthcare (diagnosis explanation), finance (credit decisions), autonomous vehicles (safety-critical).",
    overview: "Understand and explain AI decisions."
  },
  {
    id: 37,
    title: "Adversarial Robustness",
    category: "Specialized Applications",
    difficulty: "Advanced",
    description: "Defend models against adversarial attacks.",
    summary: "Adversarial examples: imperceptible perturbations fool models into misclassification. FGSM (Fast Gradient Sign Method) adds gradient direction perturbations. PGD (Projected Gradient Descent) iteratively finds adversarial examples. C&W attack solves optimization problem for effective perturbations. Transferability: adversarial examples often fool other models. Defenses: adversarial training (train on adversarial examples), robust optimization, input preprocessing, model ensembles. Certified defenses provide robustness guarantees. Randomized smoothing adds noise at inference time. Verification: formally prove robustness properties (expensive). Robustness-accuracy tradeoff: improving robustness reduces accuracy on clean data. Evaluation: attack success rate under various perturbation budgets. Black-box attacks without model access. Challenges: computationally expensive, tradeoffs, new attack methods emerge. Applications: autonomous vehicles (safety), biometrics (security), medical imaging (diagnostic reliability). Backdoor attacks inject malicious data during training; defense is active area.",
    overview: "Defend AI models against attacks."
  },
  {
    id: 38,
    title: "Multimodal Learning",
    category: "Specialized Applications",
    difficulty: "Advanced",
    description: "Learn from multiple data modalities together.",
    summary: "Multimodal learning integrates information from multiple modalities (text, image, audio, video) leveraging complementary information. Vision-language models (CLIP) learn joint embeddings via contrastive learning. Cross-modal attention focuses on relevant information across modalities. DALL-E generates images from text descriptions. Video understanding combines visual and audio information. Speech recognition pairs audio with language models. Multimodal fusion: early (concatenate features), late (combine predictions), hybrid. Alignment: match corresponding multimodal parts (faces to voices). Challenges: modality imbalance (varying signal quality), missing modalities, synchronization. Self-supervised learning: text-image matching (contrastive), masked language/image modeling. Applications: image captioning, visual question-answering, video understanding, recommendation (user reviews plus images), medical (clinical notes plus imaging). Datasets: COCO Captions, Flickr30K, MSCOCO, Kinetics. Evaluation: multimodal-specific metrics. Emerging: 3D understanding, interactive systems, real-time multimodal AI.",
    overview: "Integrate multiple data modalities."
  },
  {
    id: 39,
    title: "Graph Neural Networks",
    category: "Specialized Applications",
    difficulty: "Advanced",
    description: "Deep learning on graph-structured data.",
    summary: "Graph Neural Networks process data represented as graphs (nodes, edges). Node classification: classify nodes given neighbors information. Graph classification: classify entire graphs. Link prediction: predict missing edges. Message passing: nodes aggregate neighbor information, update based on aggregation. GCN (Graph Convolutional Network) extends convolutions to graphs. GraphSAGE samples neighborhoods for scalability. GAT (Graph Attention Network) learns attention weights for neighbors. GNN variants: GIN (Graph Isomorphism Network), Graph Isomorphism, spectral methods. Applications: social networks (node influence, link prediction), recommendation systems (user-item graphs), molecules (graph as atoms and bonds for property prediction), knowledge graphs (entity relations), citation networks, traffic prediction. Challenges: scalability (billion-node graphs), heterogeneous graphs (multiple node/edge types), dynamic graphs (time-varying). Pooling aggregates subgraph information. Readout functions combine node embeddings into graph representation. Evaluation: node classification accuracy, link prediction AUC, graph classification. Graph generation: generative models create synthetic graphs. Emerging: geometric deep learning (coordinates), equivariant networks (symmetries).",
    overview: "Apply deep learning to graph data."
  },
  {
    id: 40,
    title: "Ethics, Fairness & AI Safety",
    category: "Specialized Applications",
    difficulty: "Intermediate",
    description: "Responsible AI development and deployment.",
    summary: "AI ethics addresses moral implications of AI systems. Fairness: equal treatment across demographic groups. Bias in data/algorithms perpetuates historical discrimination. Fairness definitions: demographic parity (equal outcomes), equalized odds (equal true positive/negative rates), calibration (prediction accuracy consistent across groups). Transparency: stakeholders understand system behavior. Privacy: protect personal data (differential privacy, federated learning). Safety: prevent unintended harms. Accountability: clear responsibility assignment. Robustness: reliable under adversarial conditions. Alignment: AI objectives match human values. Specification gaming: AI exploits loopholes in objective functions. Long-term risks: AGI superintelligence concerns. Regulations: GDPR (privacy), CCPA (data rights), AI acts (oversight). Fairness-accuracy tradeoffs: improving fairness may reduce performance. Mitigation: diverse training data, fairness constraints during training, post-processing adjustments. Evaluation: fairness metrics across demographic groups. Applications: hiring (prevent discrimination), lending (fair credit decisions), healthcare (equitable treatment), criminal justice (unbiased risk assessment). Multidisciplinary: computer science, philosophy, law, social science.",
    overview: "Develop ethical, fair, and safe AI systems."
  }
];

module.exports = expandedTopics;