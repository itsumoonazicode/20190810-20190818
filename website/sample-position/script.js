const footer = '{"name": ["Date", "Category", "Contact"]}'
const FooterList = document.getElementById("footer").children
// const FooterList = document.querySelectorAll("#footer")
console.log(FooterList)



try {
	const json = JSON.parse(footer)
	console.log(json.name)
	const SortList = json.name
	SortList.sort()
	for(let i = 0; FooterList.length > i; i++) {
		console.log(`nameの${i}番目は、${SortList[i]}です。`)
		FooterList[i].textContent = SortList[i]
	}
} catch(err) {
	console.log(err)
}