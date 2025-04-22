import PostFooter from "@/app/components/PostFooter";
import Image from "next/image";
import sigmoidFunction from "@/app/assets/sigmoid_function.png";
import dataScatter from "@/app/assets/data_scatter.png";
import lossConvergence from "@/app/assets/loss_convergence.png";
import decisionBoundary from "@/app/assets/decision_boundary.png";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

export default function Post3() {
  return (
    <article className="prose prose-lg max-w-none">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">বাইনারি বিশ্বে যাত্রা: লজিস্টিক রিগ্রেশনের গভীরে</h1>
      <div className="text-gray-600 text-sm mb-8">এপ্রিল ২২, ২০২৫</div>
      <div className="whitespace-pre-wrap text-base leading-relaxed">
        <h2 className="text-xl font-bold mt-6 mb-4">ভূমিকা</h2>
        <p>
          লজিস্টিক রিগ্রেশন মেশিন লার্নিংয়ের একটি মৌলিক অ্যালগরিদম, যা বাইনারি ক্লাসিফিকেশনে ব্যবহৃত হয়। এই ব্লগে আমরা <strong>গাণিতিক ডেরিভেশন</strong>, <strong>Python কোড ইম্প্লিমেন্টেশন</strong>, এবং <strong>ডেটা ভিজুয়ালাইজেশন</strong> একসাথে দেখব। চলুন শুরু করি!
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">১. সিগময়েড ফাংশন: প্রোবাবিলিটি এবং এর ডেরিভেটিভ</h2>
        <p>
          লজিস্টিক রিগ্রেশনে সিগময়েড ফাংশন ব্যবহার করা হয় ইনপুট `z`-কে 0-1 এর মধ্যে ম্যাপ করতে, যা প্রোবাবিলিটি হিসেবে ব্যাখ্যা করা যায়।
        </p>
        
        <p><strong>গাণিতিক সংজ্ঞা:</strong></p>
        <p className="text-center my-4">
          <Latex>{"$\\sigma(z) = \\frac{1}{1 + e^{-z}}$"}</Latex>
        </p>
        
        <p><strong>ডেরিভেটিভ (Chain Rule ব্যবহার করে):</strong></p>
        <p className="text-center my-4">
          <Latex>{"$\\sigma'(z) = \\sigma(z) \\cdot (1 - \\sigma(z))$"}</Latex>
        </p>
        
        <p><strong>কোড ইম্প্লিমেন্টেশন:</strong></p>
        <pre className="bg-black p-4 rounded-md overflow-auto border border-gray-700">
          <code className="language-python text-white">
{`import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-z))`}
          </code>
        </pre>
        
        <p><em>ব্যাখ্যা:</em></p>
        <ul className="list-disc pl-6">
          <li>`np.exp(-z)` এক্সপোনেনশিয়াল ফাংশনের মান ক্যালকুলেট করে।</li>
          <li>সিগময়েড কার্ভ S-আকৃতির, যা ইনপুটকে 0-1 এ স্কেল করে।</li>
        </ul>
        
        <p><strong>ভিজুয়ালাইজেশন:</strong></p>
        <pre className="bg-black p-4 rounded-md overflow-auto border border-gray-700">
          <code className="language-python text-white">
{`import matplotlib.pyplot as plt

z = np.linspace(-10, 10, 100)
plt.plot(z, sigmoid(z), color='purple', lw=2)
plt.title("সিগময়েড ফাংশন: z vs. Probability")
plt.xlabel("z (লিনিয়ার কম্বিনেশন)")
plt.ylabel("p = σ(z)")
plt.grid(True)
plt.show()`}
          </code>
        </pre>
        
        <div className="flex justify-center my-6">
          <Image src={sigmoidFunction} alt="Sigmoid Function" width={500} height={300} className="border rounded-md" />
        </div>
        
        <h2 className="text-xl font-bold mt-8 mb-4">২. লস ফাংশন: বাইনারি ক্রস-এনট্রপির গাণিতিক উৎপত্তি</h2>
        <p>লস ফাংশনটি <strong>Maximum Likelihood Estimation (MLE)</strong> থেকে ডেরাইভ করা হয়।</p>
        
        <p><strong>স্টেপ ১: লাইকেলিহুড ফাংশন</strong></p>
        <p>প্রতিটি স্যাম্পলের জন্য লাইকেলিহুড:</p>
        <p className="text-center my-4">
          <Latex>{"$L(w,b) = \\prod_{i=1}^{m} p^{(i)^{y^{(i)}}} \\cdot (1 - p^{(i)})^{(1 - y^{(i)})}$"}</Latex>
        </p>
        
        <p><strong>স্টেপ ২: লগ-লাইকেলিহুড ম্যাক্সিমাইজ করা</strong></p>
        <p>লগারিদম নিলে গুণন যোগে রূপান্তরিত হয়:</p>
        <p className="text-center my-4">
          <Latex>{"$\\log L = \\sum_{i=1}^{m} [ y^{(i)} \\log p^{(i)} + (1 - y^{(i)}) \\log (1 - p^{(i)}) ]$"}</Latex>
        </p>
        
        <p><strong>স্টেপ ৩: লস ফাংশন (নেগেটিভ লগ-লাইকেলিহুড)</strong></p>
        <p>লস কমাতে নেগেটিভ নিই এবং গড় করি:</p>
        <p className="text-center my-4">
          <Latex>{"$L = -\\frac{1}{m} \\sum_{i=1}^{m} [ y^{(i)} \\log p^{(i)} + (1 - y^{(i)}) \\log (1 - p^{(i)}) ]$"}</Latex>
        </p>
        
        <p><strong>কোড ইম্প্লিমেন্টেশন:</strong></p>
        <pre className="bg-black p-4 rounded-md overflow-auto border border-gray-700">
          <code className="language-python text-white">
{`def compute_loss(y_true, y_pred):
    m = len(y_true)
    loss = -1/m * np.sum(y_true * np.log(y_pred) + (1 - y_true) * np.log(1 - y_pred))
    return loss`}
          </code>
        </pre>
        
        <p><em>ব্যাখ্যা:</em></p>
        <ul className="list-disc pl-6">
          <li>`y_true`: গ্রাউন্ড ট্রুথ লেবেল (0 বা 1)।</li>
          <li>`y_pred`: মডেলের প্রেডিক্টেড প্রোবাবিলিটি (σ(z))।</li>
        </ul>
        
        <h2 className="text-xl font-bold mt-8 mb-4">৩. গ্রেডিয়েন্ট ডেরিভেশন: Chain Rule এবং ম্যাট্রিক্স অপারেশন</h2>
        <p>
          গ্রেডিয়েন্ট ডিসেন্টের জন্য Loss-এর derivative বের করতে হবে `w` এবং `b` এর সাপেক্ষে।
        </p>
        
        <p><strong>স্টেপ ১: Loss-এর derivative wrt প্রেডিকশন (p)</strong></p>
        <p className="text-center my-4">
          <Latex>{"$\\frac{\\partial L}{\\partial p^{(i)}} = -\\frac{1}{m} \\left( \\frac{y^{(i)}}{p^{(i)}} - \\frac{1-y^{(i)}}{1-p^{(i)}} \\right)$"}</Latex>
        </p>
        
        <p><strong>স্টেপ ২: p-এর derivative wrt z (সিগময়েডের ডেরিভেটিভ)</strong></p>
        <p className="text-center my-4">
          <Latex>{"$\\frac{\\partial p^{(i)}}{\\partial z^{(i)}} = p^{(i)}(1 - p^{(i)})$"}</Latex>
        </p>
        
        <p><strong>স্টেপ ৩: z-এর derivative wrt ওয়েট (w) এবং বায়াস (b)</strong></p>
        <p className="text-center my-4">
          <Latex>{"$\\frac{\\partial z^{(i)}}{\\partial w_j} = x_j^{(i)}, \\frac{\\partial z^{(i)}}{\\partial b} = 1$"}</Latex>
        </p>
        
        <p><strong>স্টেপ ৪: চেইন রুল একত্রিত করা</strong></p>
        <p>গ্রেডিয়েন্ট ফর `w_j`:</p>
        <p className="text-center my-4">
          <Latex>{"$\\frac{\\partial L}{\\partial w_j} = \\frac{1}{m} \\sum_{i=1}^{m} (p^{(i)} - y^{(i)}) x_j^{(i)}$"}</Latex>
        </p>
        
        <p>গ্রেডিয়েন্ট ফর `b`:</p>
        <p className="text-center my-4">
          <Latex>{"$\\frac{\\partial L}{\\partial b} = \\frac{1}{m} \\sum_{i=1}^{m} (p^{(i)} - y^{(i)})$"}</Latex>
        </p>
        
        <p><strong>কোড ইম্প্লিমেন্টেশন:</strong></p>
        <pre className="bg-black p-4 rounded-md overflow-auto border border-gray-700">
          <code className="language-python text-white">
{`def compute_gradients(X, y_true, y_pred):
    m = len(y_true)
    dw = (1/m) * np.dot(X.T, (y_pred - y_true))  # X^T (P - Y)
    db = (1/m) * np.sum(y_pred - y_true)         # Σ(P - Y)
    return dw, db`}
          </code>
        </pre>
        
        <p><em>ব্যাখ্যা:</em></p>
        <ul className="list-disc pl-6">
          <li>`X.T`: ফিচার ম্যাট্রিক্সের ট্রান্সপোজ (Dimensions: n x m)।</li>
          <li>`y_pred - y_true`: ভেক্টর (m x 1)।</li>
        </ul>
        
        <h2 className="text-xl font-bold mt-8 mb-4">৪. ট্রেনিং লুপ: গ্রেডিয়েন্ট ডিসেন্ট</h2>
        <p>গ্রেডিয়েন্ট ব্যবহার করে ওয়েট এবং বায়াস আপডেট করা হয়।</p>
        
        <p><strong>গাণিতিক আপডেট রুল:</strong></p>
        <p className="text-center my-4">
          <Latex>{"$w := w - \\alpha \\cdot \\nabla_w L, \\quad b := b - \\alpha \\cdot \\nabla_b L$"}</Latex>
        </p>
        
        <p><strong>কোড ইম্প্লিমেন্টেশন:</strong></p>
        <pre className="bg-black p-4 rounded-md overflow-auto border border-gray-700">
          <code className="language-python text-white">
{`def train_logistic_regression(X, y, learning_rate=0.01, epochs=1000):
    m, n = X.shape
    w = np.zeros(n)  # ওয়েট ইনিশিয়ালাইজেশন
    b = 0            # বায়াস ইনিশিয়ালাইজেশন
    loss_history = []  # লস ট্র্যাক করার জন্য

    for epoch in range(epochs):
        z = np.dot(X, w) + b          # লিনিয়ার কম্বিনেশন: Xw + b
        y_pred = sigmoid(z)           # প্রোবাবিলিটি ক্যালকুলেশন
        loss = compute_loss(y, y_pred)
        dw, db = compute_gradients(X, y, y_pred)
        w -= learning_rate * dw       # ওয়েট আপডেট
        b -= learning_rate * db       # বায়াস আপডেট
        loss_history.append(loss)     # লস স্টোর

        if epoch % 100 == 0:
            print(f'Epoch {epoch}, Loss: {loss:.4f}')

    return w, b, loss_history`}
          </code>
        </pre>
        
        <p><em>ব্যাখ্যা:</em></p>
        <ul className="list-disc pl-6">
          <li>`np.dot(X, w)`: ম্যাট্রিক্স গুণন (লিনিয়ার কম্বিনেশন)।</li>
          <li>`learning_rate`: গ্রেডিয়েন্টের স্টেপ সাইজ কন্ট্রোল করে।</li>
        </ul>
        
        <h2 className="text-xl font-bold mt-8 mb-4">৫. ডেটা জেনারেশন এবং ভিজুয়ালাইজেশন</h2>
        <p>সিমুলেটেড ডেটা তৈরি করে মডেল ট্রেনিং:</p>
        
        <p><strong>কোড:</strong></p>
        <pre className="bg-black p-4 rounded-md overflow-auto border border-gray-700">
          <code className="language-python text-white">
{`np.random.seed(42)
X = np.random.randn(100, 2)  # 100 samples, 2 features
y = (np.dot(X, np.array([1, 2])) + 1 > 0).astype(int)  # True/False লেবেল

# ডেটা ভিজুয়ালাইজেশন
import seaborn as sns
sns.scatterplot(x=X[:,0], y=X[:,1], hue=y, palette='viridis')
plt.title("জেনারেট করা ডেটা: ক্লাস 0 vs 1")
plt.show()`}
          </code>
        </pre>
        
        <div className="flex justify-center my-6">
          <Image src={dataScatter} alt="Data Scatter" width={500} height={300} className="border rounded-md" />
        </div>
        
        <h2 className="text-xl font-bold mt-8 mb-4">৬. মডেল ট্রেনিং এবং লস কনভার্জেন্স</h2>
        <p>ট্রেনিং চালানো এবং লসের পরিবর্তন ট্র্যাক করা:</p>
        
        <pre className="bg-black p-4 rounded-md overflow-auto border border-gray-700">
          <code className="language-python text-white">
{`w, b, loss_history = train_logistic_regression(X, y, learning_rate=0.1, epochs=1000)

# লস vs ইপক প্লট
plt.plot(loss_history)
plt.title("লস কনভার্জেন্স")
plt.xlabel("ইপক")
plt.ylabel("লস")
plt.show()`}
          </code>
        </pre>
        
        <div className="flex justify-center my-6">
          <Image src={lossConvergence} alt="Loss Convergence" width={500} height={300} className="border rounded-md" />
        </div>
        
        <p><strong>আউটপুট:</strong></p>
        <pre className="bg-black p-4 rounded-md border border-gray-700">
          <code className="text-white">
{`Epoch 0, Loss: 0.6931
Epoch 100, Loss: 0.4023
...
Epoch 900, Loss: 0.2185`}
          </code>
        </pre>
        
        <h2 className="text-xl font-bold mt-8 mb-4">৭. ডিসিশন বাউন্ডারি ভিজুয়ালাইজেশন</h2>
        <p>ট্রেনড মডেলের ডিসিশন বাউন্ডারি প্লট করা হল:</p>
        
        <p><strong>গাণিতিক সমীকরণ:</strong></p>
        <p>লিনিয়ার ডিসিশন বাউন্ডারি:</p>
        <p className="text-center my-4">
          <Latex>{"$w_0 x_0 + w_1 x_1 + b = 0 \\implies x_1 = -\\frac{w_0}{w_1} x_0 - \\frac{b}{w_1}$"}</Latex>
        </p>
        
        <p><strong>কোড:</strong></p>
        <pre className="bg-black p-4 rounded-md overflow-auto border border-gray-700">
          <code className="language-python text-white">
{`x1_min, x1_max = X[:,0].min(), X[:,0].max()
x1_values = np.linspace(x1_min, x1_max, 100)
x2_values = -(w[0] * x1_values + b) / w[1]  # x2 = -(w0/w1)x1 - b/w1

sns.scatterplot(x=X[:,0], y=X[:,1], hue=y, palette='viridis')
plt.plot(x1_values, x2_values, color='red', label='ডিসিশন বাউন্ডারি')
plt.title("ট্রেনড মডেলের ডিসিশন বাউন্ডারি")
plt.legend()
plt.show()`}
          </code>
        </pre>
        
        <div className="flex justify-center my-6">
          <Image src={decisionBoundary} alt="Decision Boundary" width={500} height={300} className="border rounded-md" />
        </div>
        
        <h2 className="text-xl font-bold mt-8 mb-4">৮. উপসংহার</h2>
        <p>
          এই ব্লগে আমরা লজিস্টিক রিগ্রেশনের পুরো গাণিতিক ডেরিভেশন, কোড ইম্প্লিমেন্টেশন এবং ভিজুয়ালাইজেশন দেখলাম। Key Takeaways:
        </p>
        
        <ol className="list-decimal pl-6">
          <li><strong>সিগময়েড ফাংশন</strong> প্রোবাবিলিটি ক্যালকুলেট করে।</li>
          <li><strong>ক্রস-এনট্রপি লস</strong> MLE থেকে ডেরাইভ করা হয়।</li>
          <li><strong>গ্রেডিয়েন্ট ডিসেন্ট</strong> গ্রেডিয়েন্টের চেইন রুল ব্যবহার করে।</li>
        </ol>
        
        <pre className="bg-black p-4 rounded-md border border-gray-700">
          <code className="text-white">
{`print("ট্রেনড ওয়েট:", w)
print("ট্রেনড বায়াস:", b)

ট্রেনড ওয়েট: [0.86 1.73]  
ট্রেনড বায়াস: 0.91`}
          </code>
        </pre>
      </div>
      <PostFooter />
    </article>
  )
}