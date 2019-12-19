import React, { Component } from "react";
import { connect } from "react-redux";
import { BackTop, Icon } from "antd";

import InfiniteScroll from "react-infinite-scroll-component";

import HeadTop from "./HeadTop/HeadTop";
import Header from "./MainHeader/Header";
import SliderIntro from "./SliderIntro/SliderIntro";
import SliderItems from "./SliderItems/SliderItems";
import Categolary from "./Categolary/Categolary";
import Comments from "./Comments/Comments";
import Guarantee from "./Guarantee/Guarantee";
import Intro from "./Intro/Intro";
import LastestItems from "./LastestItems/LastestItems";
import BlogPost from "./BlogPost/BlogPost";
import SubscribeGallery from "./SubscribeGallery/SubscribeGallery";
import Footer from "./Footer/Footer";

class Home extends Component {
	state = {
		components: [
			<BackTop>
				<Icon type="arrow-up" />
				<div className="ant-back-top-inner rounded-radius">Up</div>
			</BackTop>,
			<HeadTop />,
			<Header />,
			<SliderIntro />,
			<SliderItems />
		],
		index: 0
	};

	getMoreContent = () => {
		const cpns = [
			<Categolary />,
			<Comments />,
			<Guarantee />,
			<Intro />,
			<LastestItems />,
			<BlogPost />,
			<SubscribeGallery />,
			<Footer />
		];

		const { index, components } = this.state;

		setTimeout(() => {
			if (index < cpns.length) {
				this.setState({
					components: components.concat(cpns[index]),
					index: index + 1
				});
			}
		}, 500);
	};

	render() {
		return (
			// <div className="overflow-hidden">
			// 	{/* <HeadTop />
			// 	<Header />
			// 	<SliderIntro />
			// 	<SliderItems />
			// 	<Categolary />
			// 	<Comments />
			// 	<Guarantee />
			// 	<Intro />
			// 	<LastestItems />
			// 	<BlogPost />
			// 	<SubscribeGallery />
			// 	<Footer /> */}
			<InfiniteScroll
				dataLength={this.state.components.length}
				next={this.getMoreContent}
				hasMore={true}
				loader={<h4></h4>}
				style={{ overflow: "hidden" }}
			>
				{this.state.components}
			</InfiniteScroll>
			// </div>
		);
	}
}

export default connect(state => state)(Home);
