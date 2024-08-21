import { useCallback, useEffect, useState } from "react";
import { ImageList } from "../../imageList";
export const useHome = () => {
  const [imageList, setImageList] = useState<string[]>([]);
  const [image, setImage] = useState<string>(ImageList[0]);
  const [index, setIndex] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const getRandomImages = useCallback(() => {
    if (imageList.length === 0) {
      const shuffled = ImageList.sort(() => 0.5 - Math.random());
      setImageList(shuffled);
      setImage(shuffled[0]);
      setIndex(0);
    }
    return;
  }, [imageList]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // 初回実行
    getRandomImages();

    // 30秒ごとに実行
    const interval = setInterval(() => {
      // 次の画像を表示
      if (index < imageList.length - 1) {
        setImage(imageList[index + 1]);
        setIndex(index + 1);
      } else {
        // 最後の画像の場合は最初の画像を表示
        setImage(imageList[0]);
        setIndex(0);
      }
    }, 10000);

    // クリーンアップ
    return () => clearInterval(interval);
  }, [getRandomImages, imageList, index]);

  const onClickBack = () => {
    if (index > 0) {
      setImage(imageList[index - 1]);
      setIndex(index - 1);
    } else {
      setImage(imageList[imageList.length - 1]);
      setIndex(imageList.length - 1);
    }
  };

  const onClickNext = () => {
    if (index < imageList.length - 1) {
      setImage(imageList[index + 1]);
      setIndex(index + 1);
    } else {
      setImage(imageList[0]);
      setIndex(0);
    }
  };
  return { image, onClickBack, onClickNext, currentTime };
};
