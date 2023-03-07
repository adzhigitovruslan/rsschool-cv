# Ruslan Adzhigitov
## Frontend Developer


### Contact Information:

* **Phone:** +79965042600
* **Email:** adzhigitovruslan@gmail.com
* **Telegram:** @ruslan_adj
* **GitHub**: [Ruslan Adzhigitov](https://github.com/adzhigitovruslan 'Click me!')

### About me

Hey there ! Here is small topic about myself. 

I have worked a year as cabin crew where i improve such soft skills as teamwork, communication skill, flexibility. All off-duty time i spent learning frontend development. I'm keen on programming because i have passion for creativity, finding solutions, possibility of being able to conceive a new idea and bring it to fruition. Besides that, this profession provides an option as remote work as chance to travel, that is definitely engaging option to move in this direction.

I believe that my existing skills and desire to learn will make me success in this way.

### Skills and Proficiency:

* HTML5, CSS3, SASS
* JavaScript
* Git, GitHub
* Vuejs

### Code example:

**DESCRIPTION:**

Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).


```
function twoSum(nums, target) {
  for(let i = 0; i < nums.length; i++) {
    for(let t = i + 1; t < nums.length; t++) {
      if(nums[i] + nums[t] == target) {
        return [i, t]
      }
    }
  }
}
```