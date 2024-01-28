import { Card } from 'react-bootstrap';
import { EMOJIS } from '../constants';
import { EmojiContainer, EmojiItem } from '../styledcomponents/styles';

const EmojiPickerDropdown = ({ onSelectEmoji, userEmoji }) => {

  return (
    <EmojiContainer>
      {EMOJIS.map((emoji, index) => (
        <EmojiItem name='emoji' key={index} $isSelected={emoji === userEmoji} onClick={() => onSelectEmoji(emoji)}>
          <Card className='align-items-center'>{emoji}</Card>
        </EmojiItem>
      ))}
    </EmojiContainer>
  );
};

export default EmojiPickerDropdown;
