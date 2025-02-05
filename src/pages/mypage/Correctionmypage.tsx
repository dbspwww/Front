import { useEffect, useState } from 'react';
import Auth from '../../api/auth';
import useAuth from '../../hooks/useAuth';
import { API_URL } from '../../api/constants';
import REG from '../../constants/regularExpressions';

function Correctionmypage() {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [age, setAge] = useState<number | undefined>(undefined);
	const [password, setPassword] = useState('');
	const [massage, setmassage] = useState('');
	const { checkDuplicate } = useAuth();

	const members = async () => {
		let response = await Auth.fetchAuthority();
		if (response.ok) {
			let data = await response.json();
			data = data.user;
			setEmail(data.email);
			setName(data.name);
			setAge(parseInt(data.age));
		} else {
			alert('토큰이 만료되었습니다.');
			window.location.href = '../signin';
		}
	};

	useEffect(() => {
		members();
	}, []);

	async function submit() {
		const data = {
			email: email,
			name: name,
			age: age,
			password: password,
		};
		if (((age as number) <= 0 || (age as number) >= 100) && age !== undefined) {
			alert('나이가 올바르지 않습니다.');
			return;
		}

		if (!REG.emailRegex.test(email) && email !== '') {
			alert('이메일 형식이 올바르지 않습니다.');
			return;
		}

		if (!REG.passwordReg.test(password) && password !== '') {
			alert(
				'비밀번호는 8~15자 사이에 문자, 숫자와 특수문자가 하나이상 포함되어야 합니다.'
			);
			return;
		}

		if (password.includes(' ') && password !== '') {
			alert('비밀번호에 공백이 포함되어 있습니다.');
			return;
		}
		//

		await Auth.fetchChangeAuth(data);
	}

	const handleCheckId = async () => {
		const result = await checkDuplicate(API_URL as string, email);
		setmassage(result);
	};
	return (
		<div>
			<h1 style={{ marginTop: '80px' }}>내 정보 수정하기</h1>
			<ul>
				<li style={{ marginTop: '20px' }}>
					<label htmlFor='email'>이메일</label>
					<br />
					<input
						id='email'
						type='email'
						defaultValue={email}
						placeholder='이메일'
						onChange={(e) => setEmail(e.target.value)}
					/>
					<br />
					<button onClick={handleCheckId}>이메일 중복체크</button>
					<br />
					{massage}
				</li>
				<li style={{ marginTop: '20px' }}>
					<label htmlFor='name'>이름</label>
					<br />
					<input
						id='name'
						type='text'
						defaultValue={name}
						placeholder='이름'
						onChange={(e) => setName(e.target.value)}
					/>
				</li>
				<li style={{ marginTop: '20px' }}>
					<label htmlFor='age'>나이</label>
					<br />
					<input
						id='age'
						type='number'
						defaultValue={age}
						placeholder='나이'
						onChange={(e) => setAge(Number(e.target.value))}
					/>
				</li>
				<li style={{ marginTop: '20px' }}>
					<label htmlFor='password'>비밀번호</label>
					<br />
					<input
						id='password'
						type='password'
						placeholder='비밀번호'
						onChange={(e) => setPassword(e.target.value)}
					/>
				</li>
				<button
					onClick={submit}
					style={{
						backgroundColor: '#28a745',
						color: 'white',
						padding: '7px',
						width: '100px',
						fontWeight: '800',
						border: 'none',
						borderRadius: '15px',
						marginBottom: '20px',
						marginTop: '20px',
					}}
				>
					변경하기
				</button>
			</ul>
		</div>
	);
}

export default Correctionmypage;
