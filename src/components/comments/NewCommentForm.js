import { useRef, useEffect } from 'react';

import LoadingSpinner from '../UI/LoadingSpinner';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';

import styles from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const { onAddedComment } = props;

  const { sendRequest, status, error } = useHttp(addComment);

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredComment = commentTextRef.current.value;

    sendRequest({commentData: { text: enteredComment }, quoteId: props.quoteId});
  };

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div className='centered'>
          <LoadingSpinner />
        </div>
      )}
      <div className={styles.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={styles.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
