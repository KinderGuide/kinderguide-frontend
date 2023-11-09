import './AddSchoolReviewModal.scss';

import { AddReviewModal } from '../../../../components/AddReviewModal';
import { useDispatch, useSelector } from 'react-redux';

import { useCreateSchoolReviewMutation } from '../../../../api/schoolReviewsApi';
import { closeAllModals } from '../../../../store/modalsSlice';

export const AddSchoolReviewModal = ({ data, org }) => {
  const isOpen = useSelector(
    (state) => state.modals.isOpenAddSchoolReviewModal
  );

  const [createSchoolReview, { isLoading }] = useCreateSchoolReviewMutation();

  const dispatch = useDispatch();

  const onSubmit = async (reviewData) => {
    try {
      const response = createSchoolReview({
        school_id: data.id,
        body: reviewData,
      });
      console.log(response);
      dispatch(closeAllModals());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AddReviewModal
      isOpen={isOpen}
      isLoading={isLoading}
      data={data}
      org={org}
      onSubmit={onSubmit}
    />
  );
};
