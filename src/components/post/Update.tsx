import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API_URL } from '../../constants';
import Loginnavbar from '../login/Loginnavbar';

const FirstMainDiv = styled.div`
	width: calc(100% - 250px);
	height: 100vh;
	background-image: url('https://tistory1.daumcdn.net/tistory/4939852/skin/images/allLogo2.jpg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	margin-left: 250px;
	position: fixed;
`;

const Filter = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(0, 2, 18, 0.568);
`;

const ScrollableContent = styled.div`
	z-index: 999;
	background-color: white;
	position: absolute;
	top: 17%;
	width: 85%;
	left: 50%;
	transform: translate(-50%, 0%);
	overflow-y: auto;
	height: 75vh;
`;

interface BlogPost {
	num: number;
	title: string;
	subtitle: string;
	id: string;
	uptime: string;
	board_text: string;
}

function Update() {
	const [posts, setPosts] = useState<BlogPost[]>([]);

	// 게시물 목록 불러오기
	const viewPosts = async () => {
		const response = await fetch(`${API_URL}/board/blogboard`);
		const data = await response.json();
		setPosts(data);
	};

	// 게시물 삭제

	useEffect(() => {
		viewPosts(); // 컴포넌트 마운트 시 게시물 목록 불러오기
	}, []);

	return (
		<FirstMainDiv>
			<Filter />
			<Loginnavbar />
			<ScrollableContent>
				<div style={{ padding: '50px', textAlign: 'center' }}>
					<h1 style={{ marginBottom: '30px' }}>
						수정하고 싶은 글을 선택하세요.
					</h1>
					{posts.map((item) => (
						<div key={item.num} style={{ color: 'black' }}>
							<li
								style={{
									listStyleType: 'none',
									marginBottom: '50px',
									borderBottom: '1px solid rgb(128, 128, 128)',
									borderRadius: '5px',
									width: '100%',
									padding: '10px 0',
								}}
							>
								<h2>{item.title}</h2>
								<h3>{item.subtitle}</h3>
								<p style={{ textAlign: 'right' }}>작성자: {item.id}</p>
								<p style={{ textAlign: 'right' }}>날짜: {item.uptime}</p>
								<button
									style={{
										backgroundColor: 'green',
										color: 'white',
										border: 'none',
										padding: '10px',
										borderRadius: '5px',
										fontWeight: '800',
									}}
									onClick={() =>
										(window.location.href = `/postdetail/${item.num}`)
									}
								>
									수정하기
								</button>
							</li>
						</div>
					))}
				</div>
			</ScrollableContent>
		</FirstMainDiv>
	);
}

export default Update;
