

import { Button, IconButton } from "@mui/material"
import Avatar from "@mui/material/Avatar"
import Tooltip from "@mui/material/Tooltip"
import styled from "styled-components"
import ChatIcon from "@mui/icons-material/Chat"
import MoreVerticalIcon from "@mui/icons-material/MoreVert"
import LogoutIcon from "@mui/icons-material/Logout"
import SearchIcon from "@mui/icons-material/Search"

const StyledContainer = styled.div`
  height: 100vh;
  min-width: 300px;
  max-width: 350px;
  overflow-y: scroll;
  border-right: 1px solid whitesmoke;
`

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 15px;
  border-bottom: 1px solid whitesmoke;
  position: sticky;
  top: 0;
  background-color: whitesmoke;
  z-index: 1;
`

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 2px;
`

const StyledSidebarButton = styled(Button)`
  width: 100%;
  border-top: 1px solid whitesmoke;
  border-bottom: 1px solid whitesmoke;
`

const StyledUserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover{
    opacity: 0,8;
  }
`
const StyledSearchInput = styled.input`
  outline: none;
  border: none;
  flex: 1;
`
const Sidebar = () => {
  return (
        <StyledContainer>

         <StyledHeader>
             <Tooltip title='USER EMAIL' placement="right">
               <StyledUserAvatar/>

             </Tooltip>

             <div>
             <IconButton>
                  <ChatIcon/>
              </IconButton>
              <IconButton>
                  <MoreVerticalIcon/>
              </IconButton>
              <IconButton>
                  <LogoutIcon/>
              </IconButton>
             </div>

          </StyledHeader>
          
          <StyledSearch>
            <SearchIcon/>
            <StyledSearchInput placeholder="Tìm kiếm"/>
          </StyledSearch>

          <StyledSidebarButton>Bắt đầu hội thoại </StyledSidebarButton>
        </StyledContainer>
  )
}

export default Sidebar