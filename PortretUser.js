let birthYear = prompt('Введіть рік народження');
let city = prompt('Введіть місто проживання');
let favoriteSport = prompt('Введіть улюблений вид спорту');

if (birthYear && city && favoriteSport) {
    let age = new Date().getFullYear() - birthYear;
    let message = `Ваш вік: ${age}\n`;

    if (city === 'Київ' || city === 'Вашингтон' || city === 'Лондон') {
        let country;
        switch (city) {
            case 'Київ':
                country = 'Україна';
                break;
            case 'Вашингтон':
                country = 'США';
                break;
            case 'Лондон':
                country = 'Великобританія';
                break;
        }
        message += `Ти живеш у столиці ${country}`;
    } else {
        message += `Ти живеш у місті ${city}`;
    }

    switch (favoriteSport) {
        case 'футбол':
            message += `\nКруто! Хочеш стати Ліонелом Мессі?`;
            break;
        case 'теніс':
            message += `\nКруто! Хочеш стати Новаком Джоковичем?`;
            break;
        case 'баскетбол':
            message += `\nКруто! Хочеш стати Майклом Джорданом?`;
            break;
        default:
            message += '\nКруто! Хочеш стати чемпіоном в цьому виді спорту?';
            break;
    }

    alert(message);
} else {
    let errorMessage = 'Шкода, що Ви не захотіли ввести свій(ю) ';
    if (!birthYear) {
        errorMessage += 'рік народження';

        if (city && !favoriteSport) {
            errorMessage += ' та вид спорту';
        } else if (!city && favoriteSport) {
            errorMessage += ' та місто проживання';
        }
    } else if (!city) {
        errorMessage += 'місто проживання та вид спорту';
    } else {
        errorMessage += 'вид спорту';
    }
    alert(errorMessage);
}