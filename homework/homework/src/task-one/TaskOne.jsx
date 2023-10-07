import React, {useState} from 'react';
import './TaskOne.css';

function TaskOne() {
    /**
     * Вынесите эти стейты в свой хук, все изменения полей должны валидирвоаться по разным правилам:
     * firstName, lastName - не могут быть пустыми
     * email - должен совпадать с паттерном email, оп которому стандартный email адрес- валидный, а test или @some или some@te - будут не валидны
     * password - должен быть не меньше 5 символов и должен включать в себя цифры и сепц символы (%$@ и т.д.)
     * confirmPassword - должен совпадать с password
     * */
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    // Ваш хук должен возвращать фукцию которую будет использовать форма для сабмита данных
    const onSubmitHandle = (event) => {
        event.preventDefault();

        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        } = event;

        // Здесь вы можете обрабатывать логику отправки формы,
        // например, вызвать ваш API для отправки данных формы

        // После успешной отправки формы, очистите все поля
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');


        // И используйте alert, чтобы показать результат
        alert(JSON.stringify({firstName,
            lastName,
            email,
            password,
            confirmPassword,}));
    };

    // TODO: реализуйте пользовательский хук для валидации
    // const submitForm = useSubmitForm(onSubmitHandle);

    // Замени сеттеры из стейта на callback-и из твоего хука
    return (
        <div className="form-container">
            <div className="error-message">{error}</div>
            <form onSubmit={onSubmitHandle}> {/* Измените здесь на submitForm, когда он будет готов */}
                <input type="text" name="firstName" placeholder="First Name" className="form-input"
                       onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
                <input type="text" name="lastName" placeholder="Last Name" className="form-input"
                       onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                <input type="email" name="email" placeholder="Email" className="form-input"
                       onChange={(e) => setEmail(e.target.value)} value={email}/>
                <input type="password" name="password" placeholder="Password" className="form-input"
                       onChange={(e) => setPassword(e.target.value)} value={password}/>
                <input type="password" name="confirmPassword" placeholder="Confirm Password" className="form-input"
                       onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
                <button type="submit" className="form-button">Register</button>
            </form>
        </div>
    );
}

export default TaskOne;