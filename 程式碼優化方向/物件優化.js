/* 底層解析時, 隱藏類(hidden class)的複用 --------------------------------------------------------------------------------------------------------- */
class RectArea {
	// HC0
	constructor(l, w) {
		this.l = l; // HC1
		this.w = w; // HC2
	}
}
const rect1 = new RectArea(3, 4); // 建立了隱藏類hidden classHC0, HC1, HC2
const rect2 = new RectArea(5, 6); // 相同的物件結構, 可以複用之前的所有hidden class

////////// 區隔比較 ////////// ////////// 區隔比較 ////////// ////////// 區隔比較 ////////// ////////// 區隔比較 //////////

const car1 = { color: 'red' }; // HC0
car1.seats = 4; // HC1
const car2 = { seats: 2 }; // 沒有可以複用的hidden class, 建立HC2
car2.color = 'blue'; // 沒有可以複用的hidden class, 建立HC3

/* 宣告一個物件結構後, 不要再追加屬性 --------------------------------------------------------------------------------------------------------- */
const car1 = { color: 'red' }; // In-object 屬性
car1.seats = 4; // Normal/Fast 屬性, 儲存在property store, 需要通過描述陣列間接找尋

/* 使用Array 取代 array-like --------------------------------------------------------------------------------------------------------- */
// 不如Array效率
Array.prototype.forEach.call(arrObj, (value, index) => {
	console.log(`${index}: ${value}`);
});

////////// 區隔比較 ////////// ////////// 區隔比較 ////////// ////////// 區隔比較 ////////// ////////// 區隔比較 //////////

// array-like轉換成array後, 再執行效率更好
const arr = Array.prototype.slice.call(arrObj, 0);
arr.forEach((value, index) => {
	console.log(`${index}: ${value}`);
});

/* 避免讀取超過陣列的長度(越界問題) --------------------------------------------------------------------------------------------------------- */
function foo(array) {
	// 越界比較 [10, 100, 1000]
	for (let i = 0; i <= array.length; i++) {
		if (array[i] > 1000) {
			// 1. 找不到時, 沿原型鏈的向上找尋
			// 2. undefined與數值進行比較
			// 3. 導致出錯, 無效比較
			console.log(array[i]);
		}
	}
}

/* 避免元素類型轉換 --------------------------------------------------------------------------------------------------------- */
const array = [3, 2, 1]; // PACKED_SMI_ELEMENTS
array.push(4.4); // PACKED_DOUBLE_ELEMENTS (上面對Array的優化就無效了, 就等換類型了: PACKED_SMI_ELEMENTS -> PACKED_DOUBLE_ELEMENTS)
