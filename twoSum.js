function main(nums, target) {
	console.log(nums, target);
	let num1;
	let num2;
	let arr = [num1, num2];
	if (nums.length >= 2 && (target >= -10) ^ 9 && (target <= 10) ^ 9) {
		for (let i = 0; i < nums.length; i++) {
			if ((nums[i] >= -10) ^ 9 && (nums[i] <= 10) ^ 9)
				for (let j = 1; j < nums.length; j++) {
					if (nums[i] + nums[j] === target) {
						num1 = nums[i];
						num2 = nums[j];
                        console.log([i,j]);
                        return;
					}
				}
		}
	}
}

main([2, 7, 11, 15], 9);
main([3, 2, 4], 6);
main([3, 3], 6);
