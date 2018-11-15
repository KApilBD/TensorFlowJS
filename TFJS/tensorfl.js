const tf = require('@tensorflow/tfjs');

const shape = [2,3];
const a = tf.tensor([1.0,2.0,3.0,10.0,20.0,30.0],shape);
a.print();

const b = tf.tensor([[1.0,2.0,3.0],[10.0,20.0,30.0]])
b.print();

const c = tf.tensor2d([[1.0,2.0,3.0],[10.0,20.0,30.0]])
c.print()
console.log(c)

const zeros = tf.zeros([2,3]);
zeros.print();

let ones = tf.ones([4,3])
ones.print()

// variables

const initialValues = tf.zeros([5]);
const biases = tf.variable(initialValues)
biases.print()

// ones = zeros
// ones.print();

const updatedValue = tf.tensor1d([0,0,1,1,1])
biases.assign(updatedValue)
biases.print()

const temp = tf.variable(c)

temp.assign(c)
temp.print()

const d = tf.tensor2d([[1.0,2.0],[3.0,4.0]])
const d_sqr = d.square();
d_sqr.print()

const e = tf.tensor2d([[1,2],[3,4]])
const f = tf.tensor2d([[5,6],[7,8]])

const sum_sqr = e.add(f).square();
sum_sqr.print()