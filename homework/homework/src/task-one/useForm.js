import { useState } from "react"


const useForm = (onSubmit) => {
	const [formData, setFormData] = useState ({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: ''
	});
	const [errors, setErrors] = useState({});

	// Валидация e-mail
	const validateEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email)
	};

	// Валидация пароля
	const validatePassword = (password) => {
		// Минимум 5 символов, должен содержать цифры и спц смв
		const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*%$@])[A-Za-z0-9!@#$%^&*%$@]{5,}$/;
		return passwordRegex.test(password);
	};

	// Валидация всех полей
	const validateForm  = () => {
   const newErrors = {};

		//  Валидация firstName и lastName
		if (!formData.firstName.trim()) {
			newErrors.firstName = 'First name is required';
		}
		if (!formData.lastName.trim()) {
			newErrors.lastName = 'Last name is required';
		}
		
		// Валидация email
		if (!formData.email) {
			newErrors.email = 'Email is required';
		} else if (!validateEmail(formData.email)) {
			newErrors.email = 'Please enter a valid email';
		}

		// Валидация password
		if (!formData.password) {
			newErrors.password = 'Password is required';
		} else if (!validatePassword(formData.password)) {
			newErrors.password = 'Password must be at least 5 characters and include numbers and special characters';
		}
			
			// Валидация confirmPassword
			if(formData.password !== formData.confirmPassword) {
				newErrors.confirmPassword = 'Passwords do not match';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0
	};

	// Обработчик изменения полей
	const handleChange = (e) => {
		const { name, value} = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));

		// Очищаем ошибку для корректного поля при изменении
		if (errors [name]) {
			setErrors(prev => ({
				...prev,
				[name]: ''
			}));
		}
	};

	// Обработчик отправки формы
	const handleSubmit = (e) => {
    e.preventDefault();

		if (validateForm()) {
			// Если валидация прошла успешно, вызываем onSubmit
			onSubmit(formData);

			// Очищаем форму
			setFormData({
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});
			setErrors({});
		}
  };

	return{
		formData,
		errors,
		handleChange,
		handleSubmit
	};
};

export default useForm