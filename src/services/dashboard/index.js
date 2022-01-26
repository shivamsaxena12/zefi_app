import apiRoutes from '../../config/apiRoutes';
import {configKeys} from '../../config/keys';
import {axiosInstance} from '../../utilities/configureAxios';

const getSearchData = async query => {
  try {
    const res = await axiosInstance.get(apiRoutes.getYoutubeSearchData, {
      params: {
        key: configKeys.YOUTUBE_DATA_API_KEY,
        type: 'video',
        part: 'snippet',
        maxResults: 10,
        q: query,
      },
    });

    return res;
  } catch (err) {
    // Error Handling
  }
};

const DashboardService = {
  getSearchData,
};

export default DashboardService;
