export const files = [
    {
      name: 'SafeText.js',
      type: 'text/javascript',
      content: `// SafeText: Real-time Scam Detection using Blockchain & AI
  const detectScam = (text) => {
    const pattern = /urgent|verify|click here/i;
    return pattern.test(text);
  };
  console.log(detectScam("Click here to win a prize!")); // true
  `
    },
    {
      name: 'EqualSafe.json',
      type: 'application/json',
      content: `{
    "project": "EqualSafe",
    "type": "AI Platform",
    "goal": "Detect and mitigate gender biases online",
    "tech": ["NLP", "TensorFlow", "Sentiment Analysis"]
  }`
    },
    {
      name: 'DEAFSYNC.html',
      type: 'text/html',
      content: `
        <h1>DEAFSYNC</h1>
        <p>AI-powered sign language translator glove using EEG + Vision</p>
      `
    },
    {
      name: 'DesignByCom.png',
      type: 'image/png',
      url: '/assets/project-thumbs/design-by-com.png'
    },
    {
      name: 'NeuroVital.js',
      type: 'text/javascript',
      content: `// NeuroVital: Real-time Health Monitoring Platform
  function analyzeHeartRate(data) {
    return data.filter((bpm) => bpm > 100);
  }
  const result = analyzeHeartRate([98, 102, 110]);
  console.log(result); // [102, 110]
  `
    },
    {
      name: 'LoadLock.js',
      type: 'text/javascript',
      content: `// LoadLock: Blockchain Logistics System
  const addLog = (truckId, loadData) => ({
    truckId,
    timestamp: new Date().toISOString(),
    ...loadData
  });
  `
    },
    {
      name: 'TrashBot2023.json',
      type: 'application/json',
      content: `{
    "name": "TrashBot",
    "controller": "NodeMCU",
    "features": ["ultrasonic sensor", "servo-controlled lid", "hands-free"]
  }`
    }
  ];