import { Sheet, Table } from "@mui/joy";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../slice";
import moment from "moment";

const EpisodeListing = ({ ids }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.episode.listing);

  useEffect(() => {
    dispatch(action.fetchEpisodes({ ids }));
  }, [dispatch, ids]);

  return (
    <Sheet>
      {data && (
        <Table color="primary" size="md" variant="plain">
          <thead>
            <tr>
              <th>Name</th>
              <th>Air Date</th>
              <th>Episode</th>
              <th>Created Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.name}</th>
                <td>{item.air_date}</td>
                <td>{item.episode}</td>
                <td>{moment(item.created).format("D MMMM YYYY h:mma")}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Sheet>
  );
};

export default EpisodeListing;
