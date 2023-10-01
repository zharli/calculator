const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");
const n4 = document.getElementById("n4");
const n5 = document.getElementById("n5");
const n6 = document.getElementById("n6");
const n7 = document.getElementById("n7");
const n8 = document.getElementById("n8");
const n9 = document.getElementById("n9");
const eq = document.getElementById("equals");
const plus = document.getElementById("plus");
const min = document.getElementById("minus");
const divi = document.getElementById("divide");
const times = document.getElementById("times");
const outtxt = document.getElementById("output");
const outtxt2 = document.getElementById("output2");
const resulttxt = document.getElementById("result");

let out = '';
let out2 = '';

const values = {
    1:{value: 1},
    2:{value: 2},
    3:{value: 3},
    4:{value: 4},
    5:{value: 5},
    6:{value: 6},
    7:{value: 7},
    8:{value: 8},
    9:{value: 9},
    10:{value: 0}
}

let number = 1;

n1.addEventListener("click",() => {
    out += values[1].value.toString();
})
n2.addEventListener("click",() => {
    out += values[2].value.toString();
})
n3.addEventListener("click",() => {
    out += values[3].value.toString();
})
n4.addEventListener("click",() => {
    out += values[4].value.toString();
})
n5.addEventListener("click",() => {
    out += values[5].value.toString();
})
n6.addEventListener("click",() => {
    out += values[6].value.toString();
})
n7.addEventListener("click",() => {
    out += values[7].value.toString();
})
n8.addEventListener("click",() => {
    out += values[8].value.toString();
})
n9.addEventListener("click",() => {
    out += values[9].value.toString();
})

plus.addEventListener("click", () => {
    outtxt.style.zIndex = 1;
n1.addEventListener("click",() => {
        out2 += values[1].value.toString();
        out -= values[1].value.toString();
        out /= 10;
        equals.addEventListener("click", () => {
            result = +out + +out2;
            resulttxt.textContent = `${result}`;
        })
    })
n2.addEventListener("click",() => {
        out2 += values[2].value.toString();
        out -= values[2].value.toString();
        out /= 10;
        equals.addEventListener("click", () => {
            result = +out + +out2;
            resulttxt.textContent = `${result}`;
        })
    })
n3.addEventListener("click",() => {
        out2 += values[3].value.toString();
        out -= values[3].value.toString();
        out /= 10;
        equals.addEventListener("click", () => {
            result = +out + +out2;
            resulttxt.textContent = `${result}`;
        })
    })
n4.addEventListener("click",() => {
        out2 += values[4].value.toString();
        out -= values[4].value.toString();
        out /= 10;
        equals.addEventListener("click", () => {
            result = +out + +out2;
            resulttxt.textContent = `${result}`;
        })
    })
n5.addEventListener("click",() => {
        out2 += values[5].value.toString();
        out -= values[5].value.toString();
        out /= 10;
        equals.addEventListener("click", () => {
            result = +out + +out2;
            resulttxt.textContent = `${result}`;
        })
    })
n6.addEventListener("click",() => {
        out2 += values[6].value.toString();
        out -= values[6].value.toString();
        out /= 10;
        equals.addEventListener("click", () => {
            result = +out + +out2;
            resulttxt.textContent = `${result}`;
        })
    })
n7.addEventListener("click",() => {
        out2 += values[7].value.toString();
        out -= values[7].value.toString();
        out /= 10;
        equals.addEventListener("click", () => {
            result = +out + +out2;
            resulttxt.textContent = `${result}`;
        })
    })
n8.addEventListener("click",() => {
        out2 += values[8].value.toString();
        out -= values[8].value.toString();
        out /= 10;
        equals.addEventListener("click", () => {
            result = +out + +out2;
            resulttxt.textContent = `${result}`;
        })
    })
n9.addEventListener("click",() => {
        out2 += values[9].value.toString();
        out -= values[9].value.toString();
        out /= 10;
        equals.addEventListener("click", () => {
            result = +out + +out2;
            resulttxt.textContent = `${result}`;
        })
    })
})
min.addEventListener("click", () => {
    outtxt.style.zIndex = 1;
    n1.addEventListener("click",() => {
            out2 += values[1].value.toString();
            out -= values[1].value.toString();
            out /= 10;
            equals.addEventListener("click", () => {
                result = +out - +out2;
                resulttxt.textContent = `${result}`;
            })
        })
    n2.addEventListener("click",() => {
            out2 += values[2].value.toString();
            out -= values[2].value.toString();
            out /= 10;
            equals.addEventListener("click", () => {
                result = +out - +out2;
                resulttxt.textContent = `${result}`;
            })
        })
    n3.addEventListener("click",() => {
            out2 += values[3].value.toString();
            out -= values[3].value.toString();
            out /= 10;
            equals.addEventListener("click", () => {
                result = +out - +out2;
                resulttxt.textContent = `${result}`;
            })
        })
    n4.addEventListener("click",() => {
            out2 += values[4].value.toString();
            out -= values[4].value.toString();
            out /= 10;
            equals.addEventListener("click", () => {
                result = +out - +out2;
                resulttxt.textContent = `${result}`;
            })
        })
    n5.addEventListener("click",() => {
            out2 += values[5].value.toString();
            out -= values[5].value.toString();
            out /= 10;
            equals.addEventListener("click", () => {
                result = +out - +out2;
                resulttxt.textContent = `${result}`;
            })
        })
    n6.addEventListener("click",() => {
            out2 += values[6].value.toString();
            out -= values[6].value.toString();
            out /= 10;
            equals.addEventListener("click", () => {
                result = +out - +out2;
                resulttxt.textContent = `${result}`;
            })
        })
    n7.addEventListener("click",() => {
            out2 += values[7].value.toString();
            out -= values[7].value.toString();
            out /= 10;
            equals.addEventListener("click", () => {
                result = +out - +out2;
                resulttxt.textContent = `${result}`;
            })
        })
    n8.addEventListener("click",() => {
            out2 += values[8].value.toString();
            out -= values[8].value.toString();
            out /= 10;
            equals.addEventListener("click", () => {
                result = +out - +out2;
                resulttxt.textContent = `${result}`;
            })
        })
    n9.addEventListener("click",() => {
            out2 += values[9].value.toString();
            out -= values[9].value.toString();
            out /= 10;
            equals.addEventListener("click", () => {
                result = +out - +out2;
                resulttxt.textContent = `${result}`;
            })
        })
    })
times.addEventListener("click", () => {
    outtxt.style.zIndex = 1;
    n1.addEventListener("click",() => {
                out2 += values[1].value.toString();
                out -= values[1].value.toString();
                out /= 10;
                equals.addEventListener("click", () => {
                    result = +out * +out2;
                    resulttxt.textContent = `${result}`;
                })
            })
        n2.addEventListener("click",() => {
                out2 += values[2].value.toString();
                out -= values[2].value.toString();
                out /= 10;
                equals.addEventListener("click", () => {
                    result = +out * +out2;
                    resulttxt.textContent = `${result}`;
                })
            })
        n3.addEventListener("click",() => {
                out2 += values[3].value.toString();
                out -= values[3].value.toString();
                out /= 10;
                equals.addEventListener("click", () => {
                    result = +out * +out2;
                    resulttxt.textContent = `${result}`;
                })
            })
        n4.addEventListener("click",() => {
                out2 += values[4].value.toString();
                out -= values[4].value.toString();
                out /= 10;
                equals.addEventListener("click", () => {
                    result = +out * +out2;
                    resulttxt.textContent = `${result}`;
                })
            })
        n5.addEventListener("click",() => {
                out2 += values[5].value.toString();
                out -= values[5].value.toString();
                out /= 10;
                equals.addEventListener("click", () => {
                    result = +out * +out2;
                    resulttxt.textContent = `${result}`;
                })
            })
        n6.addEventListener("click",() => {
                out2 += values[6].value.toString();
                out -= values[6].value.toString();
                out /= 10;
                equals.addEventListener("click", () => {
                    result = +out * +out2;
                    resulttxt.textContent = `${result}`;
                })
            })
        n7.addEventListener("click",() => {
                out2 += values[7].value.toString();
                out -= values[7].value.toString();
                out /= 10;
                equals.addEventListener("click", () => {
                    result = +out * +out2;
                    resulttxt.textContent = `${result}`;
                })
            })
        n8.addEventListener("click",() => {
                out2 += values[8].value.toString();
                out -= values[8].value.toString();
                out /= 10;
                equals.addEventListener("click", () => {
                    result = +out * +out2;
                    resulttxt.textContent = `${result}`;
                })
            })
        n9.addEventListener("click",() => {
                out2 += values[9].value.toString();
                out -= values[9].value.toString();
                out /= 10;
                equals.addEventListener("click", () => {
                    result = +out * +out2;
                    resulttxt.textContent = `${result}`;
                })
            })
        })
divi.addEventListener("click", () => {
    outtxt.style.zIndex = 1;
        n1.addEventListener("click",() => {
                        out2 += values[1].value.toString();
                        out -= values[1].value.toString();
                        out /= 10;
                        equals.addEventListener("click", () => {
                            result = +out / +out2;
                            resulttxt.textContent = `${result}`;
                        })
                    })
                n2.addEventListener("click",() => {
                        out2 += values[2].value.toString();
                        out -= values[2].value.toString();
                        out /= 10;
                        equals.addEventListener("click", () => {
                            result = +out / +out2;
                            resulttxt.textContent = `${result}`;
                        })
                    })
                n3.addEventListener("click",() => {
                        out2 += values[3].value.toString();
                        out -= values[3].value.toString();
                        out /= 10;
                        equals.addEventListener("click", () => {
                            result = +out / +out2;
                            resulttxt.textContent = `${result}`;
                        })
                    })
                n4.addEventListener("click",() => {
                        out2 += values[4].value.toString();
                        out -= values[4].value.toString();
                        out /= 10;
                        equals.addEventListener("click", () => {
                            result = +out / +out2;
                            resulttxt.textContent = `${result}`;
                        })
                    })
                n5.addEventListener("click",() => {
                        out2 += values[5].value.toString();
                        out -= values[5].value.toString();
                        out /= 10;
                        equals.addEventListener("click", () => {
                            result = +out / +out2;
                            resulttxt.textContent = `${result}`;
                        })
                    })
                n6.addEventListener("click",() => {
                        out2 += values[6].value.toString();
                        out -= values[6].value.toString();
                        out /= 10;
                        equals.addEventListener("click", () => {
                            result = +out / +out2;
                            resulttxt.textContent = `${result}`;
                        })
                    })
                n7.addEventListener("click",() => {
                        out2 += values[7].value.toString();
                        out -= values[7].value.toString();
                        out /= 10;
                        equals.addEventListener("click", () => {
                            result = +out / +out2;
                            resulttxt.textContent = `${result}`;
                        })
                    })
                n8.addEventListener("click",() => {
                        out2 += values[8].value.toString();
                        out -= values[8].value.toString();
                        out /= 10;
                        equals.addEventListener("click", () => {
                            result = +out / +out2;
                            resulttxt.textContent = `${result}`;
                        })
                    })
                n9.addEventListener("click",() => {
                        out2 += values[9].value.toString();
                        out -= values[9].value.toString();
                        out /= 10;
                        equals.addEventListener("click", () => {
                            result = +out / +out2;
                            resulttxt.textContent = `${result}`;
                        })
                    })
                })  
                
                equals.addEventListener('click', () => {
                    outtxt2.style.zIndex = 1;
                })

setInterval(function output(){
    outtxt.textContent = `${out}`;
    outtxt2.textContent = `${out2}`;
})

let result = 0;

   

