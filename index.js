function propuestaCita() {
    Swal.fire({
        title: "Nico..!!",
        text: "¿Hacemos Algo el Viernes??",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#d81b60',
        cancelButtonColor: '#b71c1c',
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                '¡Sabía que dirías que sí! ❤️🎉',
                '¡Lo Vamos a Pasar Bien Juntos!',
                'success'
            );
        } else {
            Swal.fire(
                '¡No acepto un no como respuesta! 😏',
                'Inténtalo de nuevo.',
                'error'
            ).then(() => {
                propuestaCita();
            });
        }
    });
}