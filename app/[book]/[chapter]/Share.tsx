// 'use client';
import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import {
//   EmailShareButton,
//   FacebookShareButton,
//   LinkedinShareButton,
//   TelegramShareButton,
//   TwitterIcon,
//   TwitterShareButton,
// } from 'react-share';
import {
  // Linkedin,
  Share as ShareIcon,
  // Mail,
  // Send,
  // Facebook,
  // Twitter,
  Copy,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type ShareProps = {};

const Share: FC<ShareProps> = () => {
  const pathname = usePathname();
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';
  const fullPath = `${origin}${pathname}`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex items-center justify-center gap-2 rounded border border-slate-200 bg-slate-100 px-3 py-1'>
        <ShareIcon className='h-4 w-4 text-slate-700' />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <CopyToClipboard text={fullPath}>
            <button className='flex items-center gap-2'>
              <Copy className='h-4 w-4 text-slate-700' /> Copy URL
            </button>
          </CopyToClipboard>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Share;
