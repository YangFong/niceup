import * as React from 'react';
import Taro, { useReachBottom } from '@tarojs/taro';
import { styled } from 'linaria/react';
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components';
import {useProduct, useProducts} from '../../hooks/useProducts';
import uniqby from 'lodash.uniqby';

import './index.less';

const Slogan = styled(View)<{ color }>`
  width: 100%;
  height: 44px;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: ${props => props.color};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  .txt {
    padding: 12px;
    font-size: 20px;
    line-height: 20px;
  }
`;

export interface IProductCardProps {
  data;
}

export function ProductCard(props: IProductCardProps) {
  const { data } = props;

  const handleClick = () => {
    Taro.navigateTo({
      url: `/pages/detail/detail?id=${data._id}`,
    });
  };

  const res = useProduct(data._id);
  // 计算最大值与最小值
  let maxSpec = -Infinity;
  let minSpec = Infinity;
  for (const {price} of (res.data || {specs:[]}).specs) {
    maxSpec = Math.max(maxSpec, price);
    minSpec = Math.min(minSpec, price);
  }

  return (
    <van-col span="12">
      <View className="product-wapper" onClick={handleClick}>
        <View className="image">
          <Image src={data.thumb} mode="aspectFill" />
          {data.desc && (
            <Slogan color={data.color}>
              <View className="txt">{data.desc}</View>
            </Slogan>
          )}
        </View>
        <View className="title">{data.title}</View>
        <View className="price">
          {/*<View className="curr">￥{data.price}</View>*/}
          {/*<View className="curr">￥{data.price}</View>*/}
          <View className="price">￥{minSpec < maxSpec ? `${minSpec} ~ ${maxSpec}` : data.price }</View>
          {data.price_o != 0 && <View className="ori">{data.price_o}</View>}
        </View>
      </View>
    </van-col>
  );
}

export interface IProductListProps {
  curr;
  tag;
}
export default function ProductList(props: IProductListProps) {
  const { curr, tag } = props;
  const [data, setData]: any = React.useState([]);

  const [page, setPage] = React.useState(0);

  const { data: resolvedData } = useProducts(page, tag);

  useReachBottom(() => {
    if (curr == tag) {
      setPage(old =>
        !resolvedData || !resolvedData['hasMore'] ? old : old + 1,
      );
    }
  });

  React.useEffect(() => {
    if (resolvedData?.data) {
      setData(old => uniqby([...old, ...resolvedData.data], '_id'));
    }
  }, [resolvedData]);

  return (
    <View style={{ padding: '9PX' }}>
      <van-row gutter="10">
        {data.map(item => {
          return <ProductCard data={item} />;
        })}
      </van-row>
    </View>
  );
}
