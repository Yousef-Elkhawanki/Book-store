const paymentWay = document.querySelectorAll(".checkout--order--checkbox");

paymentWay.forEach((way) => {
    way.addEventListener("click", function () {
        paymentWay.forEach((w) => {
            w.classList.remove("checked");
            const input = w.querySelector("input");
            input.checked = false; 
        });

        this.classList.add("checked"); 
        const input = this.querySelector("input");
        input.checked = true; 
    });
});
