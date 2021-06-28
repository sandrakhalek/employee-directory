import { Tag } from "antd";
import "./Tags.css";

const { CheckableTag } = Tag;

const Tags = ({ tags, selectedTag, setSelectedTag }) => {
  const handleChange = (tag) => setSelectedTag(tag);

  return (
    <div className="tags">
      {tags.map((tag) => (
        <CheckableTag
          key={tag}
          checked={selectedTag === tag}
          onChange={() => handleChange(tag)}
        >
          {tag}
        </CheckableTag>
      ))}
    </div>
  );
};

export default Tags;
