describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
  flattenArray = function (arr) {
      return flattenInner(arr).sort();
    },

    flattenInner = function (arr) {
        arr = Array.prototype.concat.apply([], arr);
        return arr.some(Array.isArray) ? flattenInner(arr) : arr;
    };	
	
	  arr = flattenArray(arr);   
    expect(arr).toEqual(expected);
  });
});
