---
layout: layout/main.njk
tags: vim, vimrc, tricks
addAllPagesToCollections: true
---

# Insert current date time while you are in 'insert mode'

\2023-\10-\14 \02:\40:\43

Now, when you are in insert mode, you can press Control + d to insert the current date and time in the specified format at the cursor position. Feel free to modify the key mapping (<C-d>) to your preference.

Add following to your `.vimrc`

```
function! InsertCurrentDateTime()
  let l:datetime = system('date "+\%Y-\%m-\%d \%H:\%M:\%S"')[:-2]
  return l:datetime
endfunction

inoremap <C-d> <C-r>=InsertCurrentDateTime()<CR>
```
