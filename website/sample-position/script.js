const footer = `{
	"list": [
		{
			"name": "Date",
			"id": 2
		},
		{
			"name": "Category",
			"id": 3
		},
		{
			"name": "Monthly",
			"id": 1
		}
	]
}`
const FooterList = document.getElementById("footer").children
// const FooterList = document.querySelectorAll("#footer")
console.log(FooterList)

// jsonを読み込む
const DateUrl = "./navList.json"
fetch(DateUrl)
	// ここで内部的にJSON.parse()が行なわれている
	.then((res) => res.json())
	.then((json) => {
		const SortList = Array.from(json["FooterList"])
		console.log(SortList)
		// 比較関数を利用して"id"の値でソート
		SortList.sort((a, b) => {
			if(a.id > b.id) {
				return 1
			} else if (b.id > a.id) {
				return -1
			} else {
				return 0
			}
		})
		
		for(let i = 0; FooterList.length > i; i++) {
			console.log(`nameの${i}番目は、${SortList[i].name}です。`)
			FooterList[i].textContent = SortList[i].name
		}
	})

