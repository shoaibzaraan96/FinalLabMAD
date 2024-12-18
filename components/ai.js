import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';

export async function loadModel() {
  await tf.ready();
  const model = await tf.loadLayersModel('path/to/your/model.json'); // Replace with your TensorFlow Lite model
  return model;
}

export function recommendCourses(model, userData) {
  const inputTensor = tf.tensor(userData); // Prepare input data
  const predictions = model.predict(inputTensor);
  return predictions;
}
