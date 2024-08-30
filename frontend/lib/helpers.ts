export function formatIndianNumber(number: number | null) {
	if (!number) {
		return;
	}
	let numStr = number.toString();
	let [integerPart, fractionalPart] = numStr.split(".");
	let lastThreeDigits = integerPart.slice(-3);
	let otherDigits = integerPart.slice(0, -3);
	if (otherDigits.length > 0) {
		otherDigits = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
		integerPart = otherDigits + "," + lastThreeDigits;
	} else {
		integerPart = lastThreeDigits;
	}
	return fractionalPart ? integerPart + "." + fractionalPart : integerPart;
}
export function convertDateToRequiredFormat(date: string) {
	const months: {
		[key: number]: string;
	} = {
		1: "Jan",
		2: "Feb",
		3: "Mar",
		4: "Apr",
		5: "May",
		6: "Jun",
		7: "Jul",
		8: "Aug",
		9: "Sep",
		0: "Oct",
		11: "Nov",
		12: "Dec",
	};
	const [year, month, day] = date.split("-");
	return `${day} ${months[parseInt(month)]} ${year}`;
}
export function objectToString(obj: any) {
	let result = "Error occurred: ";
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			const data = obj[key] as string;
			result += key + data.toString().toLowerCase().replace("this field", "");
			break;
		}
	}
	return result;
}
