document.addEventListener("DOMContentLoaded", function() {
    // Gérer la soumission des avis
    document.querySelector("#feedback button[type='submit']").addEventListener("click", function(event) {
        event.preventDefault();
        
        const rating = document.querySelector("#rating").value;
        const comment = document.querySelector("#comment").value;
        
        if (rating && comment) {
            const review = document.createElement("div");
            review.classList.add("user-review");
            review.innerHTML = <p>Note : ${rating}</p><p>Commentaire : ${comment}</p>;
            document.querySelector("#reviews").appendChild(review);
            
            // Réinitialiser le formulaire
            document.querySelector("#rating").value = "";
            document.querySelector("#comment").value = "";
        }
    });
});