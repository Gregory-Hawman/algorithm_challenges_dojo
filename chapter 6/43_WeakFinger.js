// [] Weak Finger
// Let’s count on our fingers! Write a function to return how far you can
// count on one hand, continually from finger 1 to 5 then back again.
// However, one finger is weak and limits the number of times you can
// use it. You are sent the number of the weak finger, and how many
// times you can use it. After that, you can neither count on it nor skip
// it. If you count the sequence 1,2,3,4,5,4,3,2,1,2,3, you would return 11
// as number of counts. Given (5,0) return 4, as you would count fingers
// 1,2,3,4 (stopping before first 5). Given (2,1) return 7: you’d count
// 1,2,3,4,5,4,3 (stopping before second 2).