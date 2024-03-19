var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var all_guests = ["ali", "bhaag", "gettie", "rowandf", "jimmy"];
all_guests.push("hanzala", "ahmed");
all_guests.unshift("akmal", "babar");
var indextoadd = 3;
var guesttoadd = ["anna", "faizan"];
all_guests.splice.apply(all_guests, __spreadArray([indextoadd, 0], guesttoadd, false));
for (var _i = 0, all_guests_1 = all_guests; _i < all_guests_1.length; _i++) {
    var guests = all_guests_1[_i];
    console.log(guests);
}
