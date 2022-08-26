export class Helpers {
  static changeElementsAttributeXY(elem, blank) {
    const tempElem = {
      y: blank.getAttribute('y'),
      x: blank.getAttribute('x')
    }
    blank.setAttribute('y', elem.getAttribute('y'))
    blank.setAttribute('x', elem.getAttribute('x'))
    elem.setAttribute('y', tempElem.y)
    elem.setAttribute('x', tempElem.x)
  }

  static moveElement(elem, blank) {
    elem.style.transform = `translate(${+blank.getAttribute('x') * 100}%, ${
      +blank.getAttribute('y') * 100
    }%)`
    blank.style.transform = `translate(${+elem.getAttribute('x') * 100}%, ${
      +elem.getAttribute('y') * 100
    }%)`
  }

  static getElememtCoords(elem) {
    return {
      x: +elem.getAttribute('y'),
      y: +elem.getAttribute('x')
    }
  }
}
