function eligibleToVote(age) {
  if (age < 0) {
    console.log('Invalid Input');
  } else if (age >= 18) {
    console.log('Person is Eligible to vote');
  } else {
    console.log('Person is not Eligible to vote');
  }
}

eligibleToVote(20);
eligibleToVote(0);
eligibleToVote(10);
eligibleToVote(-20);
eligibleToVote(50);

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log('Number is Even');
  } else {
    console.log('Numver is Odd');
  }
}

checkEvenOdd(1);
checkEvenOdd(2);
checkEvenOdd(18);
ChannelMergerNode({
  decodeURI: '',
});
