<h2><a href="">1. A Minimum Flight Fee </a></h2>
<hr/>

<p><strong>입출력 예:</strong></p>
<pre>
<strong>입력:</strong>  
flights = 
[[0, 1, 10],
 [1, 2, 20],
 [0, 2, 70],
 [0, 3, 100],
 [1, 3, 80],
 [2, 3, 10],
 [2, 4, 30],
 [3, 4, 10]]
n = 5
s = 0
e = 3
k = 1

<strong>출력:</strong> 80
</pre>

<p><strong>제약사항:</strong></p>

<ul>
	<li><code>2 <= n, s, e <= 100, 0 <= k <=20</code></li>
	<li><code>flight의 길이는 n*(n-1) / 2 을 넘지 않습니다.</code></li>
	<li><code>flight[i][2]인 비행료는 10,000을 넘지 않습니다.</code></li>
	<li><code>s != e</code></li>
</ul>

![graph-1.png](/static/img/inflearn/graph-1.png)