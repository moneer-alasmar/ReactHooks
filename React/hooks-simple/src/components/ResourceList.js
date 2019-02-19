import React, { useState, useEffect } from "react";
import Axios from "axios";

const ResourceList = props => {
  const [resources, setResources] = useState([]);

  const fetchResource = async resource => {
    const response = await Axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );

    setResources(response.data);
  };

  useEffect(() => {
    fetchResource(props.resource);
  }, [props.resource]);

  return <div>{resources.length}</div>;
};

export default ResourceList;
