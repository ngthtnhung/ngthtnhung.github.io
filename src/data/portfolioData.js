export const projectsData = [
  {
    id: 1,
    slug: 'credit-default-risk',
    title: 'Credit Default Risk Analysis',
    subtitle: 'Financial Insights Dashboard',
    role: 'Data Analyst',
    tools: ['Power BI', 'Excel'],
    techniques: ['Data Cleaning', 'EDA', 'Visualization'],
    icon: '📊',
    brief: 'Built an interactive Power BI dashboard analyzing financial datasets to identify high-risk customer segments and provide data-driven credit recommendations.',
    tags: ['Power BI', 'Excel', 'EDA'],
    overview: 'Developed a comprehensive financial insights dashboard to analyze credit default risk patterns and identify high-risk customer segments for a financial institution. This project involved processing large-scale financial datasets and creating interactive visualizations to support strategic credit approval decisions.',
    highlights: [
      {
        title: 'Data Processing',
        description: 'Cleaned and transformed large financial datasets, systematically handling missing values, outliers, and data type inconsistencies to ensure data quality and reliability.'
      },
      {
        title: 'Exploratory Data Analysis',
        description: 'Performed comprehensive EDA to identify key patterns and correlations across multiple dimensions including income groups, age demographics, loan history, and employment stability factors.'
      },
      {
        title: 'Interactive Dashboard',
        description: 'Built a dynamic Power BI dashboard featuring KPIs, heatmaps, and segmentation charts that enable stakeholders to drill down into risk factors and explore data interactively.'
      },
      {
        title: 'Strategic Insights',
        description: 'Derived actionable insights on high-risk customer segments and proposed data-driven recommendations for improving credit approval processes and reducing default rates.'
      }
    ],
    implementation: [
      {
        title: 'Data Cleaning & Preparation',
        description: 'Utilized Excel for initial data validation and cleaning operations.',
        details: [
          'Missing value imputation using statistical methods',
          'Outlier detection and treatment',
          'Data type standardization and format corrections',
          'Feature engineering for derived metrics'
        ]
      },
      {
        title: 'Visualization & Dashboard Design',
        description: 'Created dynamic Power BI dashboards with:',
        details: [
          'Real-time KPI tracking for risk metrics',
          'Interactive heatmaps showing risk distribution across segments',
          'Drill-down capabilities for granular analysis',
          'Segmentation charts for customer profiling'
        ]
      },
      {
        title: 'Analysis Methodology',
        description: 'Applied statistical methods to:',
        details: [
          'Identify correlation patterns between customer attributes and default probability',
          'Segment customers based on risk profiles',
          'Analyze temporal trends in default rates',
          'Compare performance across different demographic groups'
        ]
      }
    ],
    results: [
      {
        title: 'High-Risk Identification',
        description: 'Successfully identified top 3 high-risk customer segments with specific characteristics, enabling targeted risk assessment strategies.'
      },
      {
        title: 'Data-Driven Recommendations',
        description: 'Provided actionable insights that enabled the credit team to adjust approval criteria and implement risk mitigation strategies.'
      },
      {
        title: 'Decision Support',
        description: 'Created an interactive tool that empowers stakeholders to make informed credit decisions based on real-time data insights.'
      }
    ],
    learnings: 'This project reinforced the importance of thorough data cleaning and the power of effective visualization in communicating complex financial insights. The experience enhanced my skills in Power BI dashboard design and deepened my understanding of credit risk analysis methodologies.',
    github: '#'
  },
  {
    id: 2,
    slug: 'ecommerce-churn-prediction',
    title: 'E-commerce Churn Prediction',
    subtitle: 'ML-based Customer Retention Analysis',
    role: 'Data Analyst / ML Analyst',
    tools: ['Python', 'Scikit-learn', 'XGBoost', 'LightGBM'],
    techniques: ['Feature Engineering', 'Classification Models', 'Model Evaluation'],
    icon: '🤖',
    brief: 'Developed ML models to predict customer churn with 40+ engineered features, achieving high ROC-AUC scores and actionable retention strategies.',
    tags: ['Python', 'XGBoost', 'Scikit-learn'],
    overview: 'Developed a comprehensive machine learning solution to predict customer churn for an e-commerce platform. This project focused on identifying at-risk customers before they leave, enabling proactive retention strategies and reducing customer acquisition costs.',
    highlights: [
      {
        title: 'Advanced Feature Engineering',
        description: 'Processed and engineered 40+ behavioral features from transaction data and session logs, creating meaningful predictors of customer churn behavior.'
      },
      {
        title: 'Model Development',
        description: 'Applied multiple supervised learning algorithms including Logistic Regression, XGBoost, and LightGBM with comprehensive hyperparameter tuning to optimize performance.'
      },
      {
        title: 'Rigorous Evaluation',
        description: 'Evaluated models using Precision, Recall, F1-Score, and ROC-AUC metrics to ensure balanced performance and identified top churn-driving factors through feature importance analysis.'
      },
      {
        title: 'Actionable Strategies',
        description: 'Proposed targeted customer retention strategies based on feature importance analysis and model insights, providing the business team with data-driven intervention approaches.'
      }
    ],
    implementation: [
      {
        title: 'Data Processing & Feature Engineering',
        description: 'Comprehensive data preparation pipeline:',
        details: [
          'Aggregated transaction-level data into customer-level features',
          'Created temporal features: recency, frequency, monetary value',
          'Engineered behavioral indicators: session duration, page views, cart abandonment rate',
          'Developed engagement metrics: purchase intervals, product category diversity',
          'Handled imbalanced data using SMOTE and class weighting techniques'
        ]
      },
      {
        title: 'Machine Learning Models',
        description: 'Implemented and compared multiple algorithms:',
        details: [
          'Logistic Regression: Baseline model for interpretability',
          'XGBoost: Gradient boosting for high accuracy with feature importance',
          'LightGBM: Fast training with efficient memory usage',
          'Hyperparameter tuning using GridSearchCV and RandomizedSearchCV',
          'Cross-validation strategies to prevent overfitting'
        ]
      },
      {
        title: 'Model Evaluation & Selection',
        description: 'Comprehensive evaluation framework:',
        details: [
          'Precision-Recall analysis for imbalanced data handling',
          'ROC-AUC scores for model discrimination ability',
          'Confusion matrix analysis for error pattern identification',
          'Feature importance ranking using SHAP values'
        ]
      }
    ],
    results: [
      {
        title: 'High Predictive Accuracy',
        description: 'Achieved ROC-AUC score of 0.87+ with XGBoost, demonstrating strong ability to distinguish between churning and non-churning customers.'
      },
      {
        title: 'Key Churn Drivers Identified',
        description: 'Discovered top 10 features driving churn including purchase frequency drop, reduced engagement, and customer service interactions.'
      },
      {
        title: 'Retention Strategies',
        description: 'Provided actionable recommendations for targeted interventions: personalized offers for at-risk segments, re-engagement campaigns, and loyalty program enhancements.'
      }
    ],
    recommendations: [
      'Early Warning System: Implement real-time scoring to flag at-risk customers for immediate retention efforts',
      'Segmented Interventions: Create targeted campaigns based on churn probability and customer value segments',
      'Customer Experience Improvements: Address key pain points identified through feature analysis',
      'Proactive Engagement: Develop automated triggers for personalized retention offers'
    ],
    learnings: 'This project enhanced my expertise in end-to-end machine learning workflows, from feature engineering to model deployment considerations. The experience deepened my understanding of handling imbalanced datasets and the importance of choosing appropriate evaluation metrics aligned with business objectives.',
    github: '#'
  },
  {
    id: 3,
    slug: 'navflow-traffic-analysis',
    title: 'NavFlow – AI Traffic Analysis',
    subtitle: 'AI-based Traffic Congestion Analysis & Prediction',
    role: 'Data Analyst / AI Engineer',
    tools: ['Python', 'OpenCV', 'Flask', 'ReactJS'],
    techniques: ['Computer Vision', 'Real-time Data Processing', 'Visualization'],
    icon: '🚦',
    brief: 'Created an AI-powered system using computer vision to analyze real-time traffic camera data and predict congestion levels with visual map overlays.',
    tags: ['OpenCV', 'Flask', 'ReactJS'],
    overview: 'Developed NavFlow, an AI-powered traffic analysis system that processes real-time traffic camera feeds to detect congestion patterns and predict traffic flow. This comprehensive solution combines computer vision, predictive analytics, and interactive visualization to provide actionable insights for traffic management.',
    highlights: [
      {
        title: 'Real-time Data Collection',
        description: 'Collected and preprocessed real-time traffic camera data for comprehensive congestion analysis, handling multiple video streams simultaneously.'
      },
      {
        title: 'Computer Vision Analysis',
        description: 'Extracted visual traffic density features using advanced Computer Vision techniques including vehicle detection, counting, and speed estimation from video frames.'
      },
      {
        title: 'Predictive Modeling',
        description: 'Built a prediction module that estimates congestion levels based on historical patterns, time of day, and current traffic conditions using time-series forecasting.'
      },
      {
        title: 'Interactive Visualization',
        description: 'Developed visual overlays and dynamic charts to display congestion trends on an interactive map interface, providing intuitive insights for traffic management teams.'
      }
    ],
    implementation: [
      {
        title: 'Computer Vision Pipeline',
        description: 'Implemented robust video processing system using OpenCV:',
        details: [
          'Frame extraction and preprocessing from multiple camera feeds',
          'Vehicle detection using pre-trained deep learning models',
          'Object tracking across frames for speed and direction estimation',
          'Traffic density calculation based on vehicle count per region',
          'Real-time processing optimization for low-latency analysis'
        ]
      },
      {
        title: 'Backend Architecture (Flask)',
        description: 'Developed RESTful API services:',
        details: [
          'Real-time video stream processing endpoints',
          'Historical data storage and retrieval system',
          'Prediction model serving for congestion forecasting',
          'WebSocket connections for live updates',
          'Data aggregation and analytics APIs'
        ]
      },
      {
        title: 'Frontend Visualization (ReactJS)',
        description: 'Created interactive user interface:',
        details: [
          'Real-time map visualization with congestion overlays',
          'Dynamic charts showing traffic patterns over time',
          'Camera feed display with detection overlays',
          'Alert system for severe congestion events',
          'Historical trend analysis dashboards'
        ]
      },
      {
        title: 'Prediction & Analytics',
        description: 'Machine learning for traffic prediction:',
        details: [
          'Time-series forecasting using historical traffic patterns',
          'Feature engineering from temporal and spatial data',
          'Congestion level classification (Low, Medium, High, Severe)',
          'Anomaly detection for unusual traffic events'
        ]
      }
    ],
    results: [
      {
        title: 'Real-time Monitoring',
        description: 'Successfully processed multiple video streams in real-time with < 2 second latency, enabling immediate traffic assessment.'
      },
      {
        title: 'Accurate Predictions',
        description: 'Achieved 82% accuracy in predicting congestion levels 30 minutes in advance, allowing proactive traffic management.'
      },
      {
        title: 'User-Friendly Interface',
        description: 'Created an intuitive map-based interface that enables traffic managers to quickly identify and respond to congestion hotspots.'
      }
    ],
    challenges: [
      'Processing Speed: Optimized video processing pipeline using frame skipping and efficient algorithms to handle multiple camera feeds simultaneously',
      'Accuracy in Various Conditions: Implemented adaptive thresholding and lighting normalization to maintain detection accuracy across different weather and lighting conditions',
      'Scalability: Designed modular architecture that allows easy addition of new camera sources and geographic regions',
      'Data Volume: Implemented efficient data storage strategies with aggregation to manage high-volume video and analytics data'
    ],
    futureEnhancements: [
      'Integration with GPS and mobile app data for more accurate traffic insights',
      'Deep learning models for incident detection (accidents, road blockages)',
      'Route recommendation system based on predicted congestion',
      'Integration with traffic signal control systems for automated optimization'
    ],
    learnings: 'This project significantly enhanced my skills in computer vision and real-time system development. I gained valuable experience in full-stack development, from implementing CV algorithms to building responsive web interfaces. The challenge of processing video data in real-time taught me important lessons about system optimization and scalable architecture design.',
    github: '#'
  }
];

export const skillsData = [
  {
    category: 'Data Analysis',
    skills: 'Python, Pandas, NumPy, Statistical Analysis, EDA'
  },
  {
    category: 'Machine Learning',
    skills: 'Scikit-learn, XGBoost, LightGBM, Feature Engineering'
  },
  {
    category: 'Visualization',
    skills: 'Power BI, Excel, Dashboards, Data Storytelling'
  },
  {
    category: 'AI & Computer Vision',
    skills: 'OpenCV, Flask, ReactJS, Real-time Processing'
  }
];

export const blogData = [
  {
    id: 1,
    date: 'November 15, 2025',
    title: 'Getting Started with Modern Web Development',
    excerpt: 'Learn the essential tools and technologies you need to start your journey in web development in 2025.',
    link: '#'
  },
  {
    id: 2,
    date: 'November 10, 2025',
    title: 'The Importance of Responsive Design',
    excerpt: 'Discover why responsive design is crucial for modern websites and how to implement it effectively.',
    link: '#'
  },
  {
    id: 3,
    date: 'November 5, 2025',
    title: 'JavaScript Best Practices in 2025',
    excerpt: 'Explore the latest best practices and patterns for writing clean, maintainable JavaScript code.',
    link: '#'
  }
];
