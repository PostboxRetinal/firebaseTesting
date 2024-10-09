import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import { auth } from '../firebase/firebase';
import '../style/css/custom.css';
import '../style/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export function Register() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			//DEBUGGING console.log(`Email: ${email} Password: ${password}`);
			await createUserWithEmailAndPassword(auth, email, password);

			onAuthStateChanged(auth, (user) => {
				if (user) {
					console.log('Usuario creado');
				} else {
					console.log('Usuario no creado');
				}
			});

			const user = auth.currentUser;
			console.log(user);
			alert('Usuario creado');

			setEmail('');
			setPassword('');
		} catch (error) {
			console.error(error);
			alert('La contraseña debe tener al menos 6 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial');
			setPassword('');
		}
	};

	return (
		<div className="container">
			<div className="content">
				<form onSubmit={handleRegister}>
					<img
						className="mb-4"
						src="/src/assets/Firebase Logo/Primary Lockup/SVG/Primary_Vertical_Lockup_Full_Color.svg"
						alt=""
						width="72"
						height="57"
					/>

					<h1 className="h3 mb-3 fw-normal">Registro</h1>

					<div className="form-floating">
						<input
							type="email"
							value={email}
							className="form-control"
							id="floatingInput"
							placeholder="name@example.com"
							onChange={(event) => setEmail(event.target.value)}
						/>
						<label htmlFor="floatingInput">E-mail</label>
					</div>

					<div className="form-floating position-relative">
						<input
							type={showPassword ? 'text' : 'password'} // Toggle input type
							value={password}
							className="form-control"
							id="floatingPassword"
							placeholder="Password"
							onChange={(event) => setPassword(event.target.value)}
						/>
						<label htmlFor="floatingPassword">Password</label>
						<span
							className="position-absolute top-50 end-0 translate-middle-y me-3"
							style={{ cursor: 'pointer' }}
							onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
						>
							<i
								className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
						</span>
					</div>
					<br/>
					<button className="w-100 btn btn-lg btn-primary" type="submit">
						Registrarse
					</button>

					<p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
				</form>
			</div>
		</div>
	);
}
