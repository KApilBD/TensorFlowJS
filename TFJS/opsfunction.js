const tf = require("@tensorflow/tfjs")

const predict = (input) =>{
    return tf.tidy(()=>{
        const x = tf.scalar(input)

        const ax2 = a.mul(x.square())
        const bx = b.mul(x)
        const y = ax2.add(bx).add(c)

        return y;
    })
}

const a = tf.scalar(2)
const b = tf.scalar(4)
const c = tf.scalar(8)

const result = predict(2)

result.print()