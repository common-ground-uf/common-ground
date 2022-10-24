import { Socket } from "socket.io";


class SocketConnection {
    users : {socketId:string, userId:string}[] = [];
    connection(client : Socket) {

        
        client.on("disconnect", () => {
            this.users = this.users?.filter((user) => user.socketId !== client.id);
        })

        client.on("identity", (userId) => {
            this.users?.push({
                socketId: client.id,
                userId: userId,
            });
        });

        client.on("subscribe", (room, otherUserId = "") => {
            const userSockets = this.users?.filter(
                (user) => user.userId === otherUserId
            );
            userSockets?.map((userInfo) => {
                const socketConn = global.io.sockets.sockets.get(userInfo.socketId);
                if (socketConn) {
                    socketConn.join(room);
                }
            });
            client.join(room);
        });

        client.on("unsubscribe", (room) => {
            client.leave(room);
        });
    }
    
}

export default new SocketConnection();