document.addEventListener('DOMContentLoaded', () => {
    let input = document.getElementById("inputBox");
    let buttons = document.querySelectorAll("button");

    let string = "";
    let result = "";
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (e.target.innerHTML == '=') {
                try {
                    result = eval(string);
                    input.value = `${string}\n=${result}`;
                    string = result.toString();
                } catch (error) {
                    input.value = "Error";
                    string = "";
                    result = "";
                }
            } else if (e.target.innerHTML == 'AC') {
                string = "";
                result = "";
                input.value = "";
            } else if (e.target.innerHTML == 'DEL') {
                string = string.slice(0, -1);
                input.value = string;
            } else {
                string += e.target.innerHTML;
                input.value = string;
            }
        })
    })
});