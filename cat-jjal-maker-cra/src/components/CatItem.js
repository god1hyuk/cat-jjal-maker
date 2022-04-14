function CatItem(props) {
	return (
		<li>
			<img src={props.img} style={{ width: '150px' }} alt="고양이 아이템 이미지" />
		</li>
	);
}

export default CatItem;