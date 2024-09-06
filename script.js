function sequentialSearch() {
    // Lấy dữ liệu từ khung nhập
    let input = document.getElementById('inputData').value;
    let searchValue = document.getElementById('searchValue').value;

    // Chuyển chuỗi thành mảng các số
    let numbers = input.split(',').map(Number);

    // Chuyển giá trị tìm kiếm sang kiểu số
    let searchNumber = Number(searchValue);

    // Thực hiện tìm kiếm tuần tự
    let foundIndex = -1;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === searchNumber) {
            foundIndex = i;
            break;
        }
    }

    // Hiển thị kết quả
    if (foundIndex !== -1) {
        document.getElementById('outputResult').innerText = `Tìm thấy giá trị ${searchNumber} ở vị trí ${foundIndex + 1}.`;
    } else {
        document.getElementById('outputResult').innerText = `Không tìm thấy giá trị ${searchNumber} trong mảng.`;
    }
}
