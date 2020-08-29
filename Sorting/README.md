# Sorting (Vietnamese)

Sắp xếp là một lĩnh vực quan trọng trong lập trình, hầu hết các ngôn ngữ lập
trình đều có sẵn các hàm phục vụ cho việc tìm kiếm, sắp xếp. Theo Donald. Knuth
thì 40% lượng công việc tính toán của máy tính là dành cho sắp xếp. Trong các
thuật toán sắp xêp hiện nay thì Quick Sort là thuật toán cho độ phức tạp về thời
gian (Time Complexity) trung bình tốt nhất, chúng ta sẽ bàn kỹ hơn ở bài tổng
kết.

Một lưu ý là dữ liệu của chúng ta có thể được nằm ở nhiều nơi trong một hệ thống
hoàn chỉnh, có thể ở database, ở localStorage trong trình duyệt, ở redis cache,
... nên việc sắp xếp có thể cần thêm một số bước chuẩn hóa, làm sạch dữ liệu...
nhưng ở đây ta chỉ nói đến trường hợp toàn bộ dữ liệu cần sắp xếp là cùng kiểu và phải được đưa
vào bộ nhớ chính.

## I. Bài toán

Cho mảng A bao gồm N phần tử cần được sắp xếp a[1], a[2], ..., a[n]. Khi đó, ta
có thể sắp xếp mảng A lại theo thứ tự tăng dần:

a[1] <= a[2] <= ... <= a[n]

Hoặc theo thứ tự giảm dần:

a[1] >= a[2] >= ... >= a[n]

Do đặc điểm của mảng là cho phép ta duyệt từ trái (left) sang phải hoặc từ phải
(right) sang trái nên bài toán sắp xếp tăng dần có thể xem là tương đương với
bài toán sắp xếp giảm dần, chỉ ngược về vị trí ban đầu của phép duyệt.

Trong bài giảng này, ta sẽ tìm hiểu lần lượt các ý tưởng sắp xếp cũng như cài
đặt tất cả các thuật toán sắp xếp. Mặc dù các hàm sắp xếp của chúng ta có vẻ thừa thãi, việc cài đặt lại các
thuật toán này giúp chúng ta hiểu rõ hơn về mặt ý tưởng cũng như các kỹ thuật
cài đặt quan trọng như đệ quy, đánh dấu, dãy tạm, chia để trị, ...

## II. Sắp xếp nổi bọt (Buble Sort)

<i>Bài toán tìm phần tử nhỏ (lớn) thứ K của mảng:</i> Cho một mảng A gồm N phần
tử, tìm phần tử nhỏ thứ K (K <= N) của mảng đó.

Ý tưởng của bài này khá đơn giản, nhưng nó cung cấp cho chúng ta một
