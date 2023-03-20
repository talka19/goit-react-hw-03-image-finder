import PropTypes from 'prop-types';
import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';

export default function ImageGalleryItem({ url, tags, onClick }) {
  return (
    <>
      <li className={css.item}>
        <img src={url} alt={tags} onClick={() => onClick(url)} />
      </li>
    </>
  );
}

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};