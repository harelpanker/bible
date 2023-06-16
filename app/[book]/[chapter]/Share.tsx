import { FC } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from 'react-share';
import {
  Linkedin,
  Share as ShareIcon,
  Mail,
  Send,
  Facebook,
  Twitter,
  Copy,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePathname } from 'next/navigation';

type ShareProps = {};

const Share: FC<ShareProps> = ({}) => {
  const pathname = usePathname();
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';
  const fullPath = `${origin}${pathname}`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='rounded py-1 px-3 border border-slate-200 bg-slate-100 flex items-center justify-center gap-2'>
        <ShareIcon className='text-slate-700 w-4 h-4' />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* email */}
        <DropdownMenuItem>
          <EmailShareButton url={fullPath} className='flex items-center gap-2'>
            <Mail className='text-slate-700 w-4 h-4' />
            <span>Email</span>
          </EmailShareButton>
        </DropdownMenuItem>
        {/* facebook */}
        <DropdownMenuItem>
          <FacebookShareButton
            url={fullPath}
            className='flex items-center gap-2'>
            <Facebook className='text-slate-700 w-4 h-4' />
            <span>Facebook</span>
          </FacebookShareButton>
        </DropdownMenuItem>
        {/* Linkedin */}
        <DropdownMenuItem>
          <LinkedinShareButton
            url={fullPath}
            className='flex items-center gap-2'>
            <Linkedin className='text-slate-700 w-4 h-4' />
            <span>Linkedin</span>
          </LinkedinShareButton>
        </DropdownMenuItem>
        {/* Telegram */}
        <DropdownMenuItem>
          <TelegramShareButton
            url={fullPath}
            className='flex items-center gap-2'>
            <Send className='text-slate-700 w-4 h-4' />
            <span>Telegram</span>
          </TelegramShareButton>
        </DropdownMenuItem>
        {/* Twitter */}
        <DropdownMenuItem>
          <TwitterShareButton
            url={fullPath}
            className='flex items-center gap-2'>
            <Twitter className='text-slate-700 w-4 h-4' />
            <span>Twitter</span>
          </TwitterShareButton>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CopyToClipboard text={fullPath}>
            <button className='flex items-center gap-2'>
              <Copy className='text-slate-700 w-4 h-4' /> Copy URL
            </button>
          </CopyToClipboard>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Share;
