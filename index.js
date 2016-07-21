function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementsByClassName('target')[0]

}

function deepestChild() {
  return document.getElementById('grand-node').querySelector('div div div div div')
}


function increaseRankBy(n) {
  var list = document.getElementsByClassName('ranked-list')
    for (var i = 0; i < list.length; i++) {
      for (var j = 0; j < list[i].children.length; j++) {
        list[i].children[j].innerHTML = (parseInt(list[i].children[j].innerHTML) + n).toString()
    }
  }
}
