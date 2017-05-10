
var flip_card       = document.querySelectorAll('.flip-card');
var first_flip_card = flip_card[0];

for(var i = 0; i < flip_card.length; i = i+1) {
  var card       = flip_card[i]
  var card_front = card.children[0];
  var card_back  = card.children[card.children.length - 1];

  card_front.onclick = function() {
  this.parentNode.style.cssText = 'transform: rotateY(180deg)';
  };

  card_back.onclick = function() {
   this.parentNode.style.cssText = '';
  };
}



