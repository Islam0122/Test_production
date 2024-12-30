const botToken = "8084208188:AAFehHPc6-ndgsSiNBh5lSd8BG6o_BI7XRQ"; // Токен вашего бота
const chatId = "7122863020";  // ID админа

document.getElementById("orderForm").addEventListener("submit", async (e) => {
    e.preventDefault(); // Отключаем стандартное поведение формы

    // Получаем данные из формы
    const email = document.getElementById("email").value;
    const fullname = document.getElementById("fullname").value;
    const age = document.getElementById("age").value;
    const description = document.getElementById("description").value;

    const message = `📝 Новый заказ!\n📧 Email: ${email}\n👤 Имя: ${fullname}\n🎂 Возраст: ${age}\n🗨️ Описание: ${description}\n\n🔔 Пожалуйста, обратите внимание на новый заказ!
    `;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const payload = {
        chat_id: chatId,
        text: message,
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        const result = await response.json();
        if (result.ok) {
            alert("Сообщение успешно отправлено!");
        } else {
            alert("Ошибка при отправке сообщения.");
        }
    } catch (error) {
        alert("Произошла ошибка: " + error.message);
    }
});
