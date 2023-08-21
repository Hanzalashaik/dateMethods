var currentdate=new Date();
console.log(currentdate.getDate());//give only date
console.log(currentdate.getDay());//give day example:monday=1,tuesday=2
console.log(currentdate.getHours());//	Returns the hour (0 - 23) in the specified date.
console.log(currentdate.getMonth());//	Returns the month (0 - 11) in the specified date.
console.log(currentdate.getFullYear());//give current full year
console.log(currentdate.getMinutes());//Returns the minutes (0 - 59) in the specified date.
console.log(currentdate.getSeconds());//Returns the seconds (0 - 59) in the specified date.

console.log(currentdate.getTimezoneOffset());

console.log(currentdate.getUTCDate())//	 Returns the day (1 - 31) of the month of the specified date as per UTC time zone.
console.log(currentdate.getUTCDay())// Returns the day (0 - 6) of the week of the specified date as per UTC timezone.
console.log(currentdate.getUTCFullYear())//Returns the four digits year of the specified date as per UTC time zone.
console.log(currentdate.getUTCHours())//Returns the hours (0 - 23) of the specified date as per UTC time zone.
console.log(currentdate.getUTCMilliseconds())//Returns the milliseconds (0 - 999) of the specified date as per UTC time zone.
console.log(currentdate.getUTCMinutes())//	   Returns the minutes (0 - 59) of the specified date as per UTC time zone.
console.log(currentdate.getUTCMonth())//	   Returns the month (0 - 11) of the specified date as per UTC time zone.
console.log(currentdate.getUTCSeconds())//	   Returns the seconds (0 - 59) of the specified date as per UTC time zone.


console.log(currentdate.toLocaleDateString());//8/21/2023
console.log(currentdate.toLocaleTimeString());//4:25:25 PM
console.log(currentdate.toLocaleString());//8/21/2023, 4:25:25 PM
;










